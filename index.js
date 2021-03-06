const express = require('express');
const mysql = require('mysql');
const path = require('path');
const app = express();
const cors = require('cors');
const uuidv4 = require("uuid/v4");
const { kMaxLength } = require('buffer');
const { off } = require('process');

const insert_user_record = 'INSERT INTO abc.amt50 (workid, uniquecode, problemset) VALUES (?, ?, ((select count(*) from abc.amt50 subquery) + 1) % 2)';
//const insert_user_record = 'INSERT INTO formal2.amt50 (workid, uniquecode, problemset) VALUES (?, ?, ((select count(*) from formal.amt50 subquery) + 1) % 200)';
//const insert_user_record = 'INSERT INTO abc.amt50 (workid, uniquecode, problemset) VALUES (?, ?, ?)';
const select_user_record = 'SELECT * FROM abc.amt50 where workid = ?'
const update_seqid = 'UPDATE abc.amt50 SET seqid = ? where workid = ?';
const insert_choice = 'INSERT INTO abc.choices50 (workid, pid, c) VALUES (?, ?, ?)';
const insert_comment = 'INSERT INTO abc.feedback (comment) VALUES (?)';


const total_tasks = 100
const task_num_per_person = 55
const pid_length = 5

// const problem_set = new Array(100);
// var good_list = {}

// for(var i = 0; i < 100; i++){
// 	problem_set[i] = 0;
// }

function numToString(num){
    var str_len = num.length
    var pad = ''
    for(let i = str_len; i < pid_length; i++){
        pad += '0'
    }
    return pad + num
}

function tofn(problemset, seqid){
    let res = []
    let tot_ps_len = problemset.length
    for(let i = seqid * pid_length; i < tot_ps_len; i = i + pid_length){
        let temp = problemset.slice(i, i + pid_length)
        res.push(parseInt(temp).toString())
    }
    return res
  }

function toproblemset(fn){
    let res = ''
    for(let i = 0; i < fn.length; i++){
        res += numToString(fn[i])
    }
    return res
}

function shuffle(arr) {
    for(let i = arr.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

function takeFirst(){
    const first = task_num_per_person;
    let arr = [];
    for(let i = 0; i < total_tasks; i++){
        arr.push((i).toString());
    }
    shuffle(arr);
    let res = arr.slice(0, first);
    res.push('99')
    return res;
}

function preparefn(seqid, problemset){
    // let base = (problemset) * 50;
    // let baselines = ['b1', 'b2', 'b3', 'b4', 'b5'];
    // let arr = [];
    // let offset = -1;
    // let count = seqid + 1;
    // for(let ite = 0; ite < 6; ite++){
    //     if(count == 56){
    //         break;
    //     }
    //     for(let i = 0; i < 100; i++){
    //         if(count == 56){
    //             break;
    //         }
    //         if(count % 11 == 0){
    //             offset += 1
    //             arr.push(baselines[offset])
    //             console.log(baselines[offset])
    //             count += 1;
    //         } else if (problem_set[i] == ite){
    //             arr.push(i.toString())
    //             console.log(i.toString())
    //             count += 1;
    //             problem_set[i] += 1;
    //         }
    //     }
    // }
    // arr.push('b1')

    // return arr;
    //console.log(problemset)
    let base = problemset * 50;
    let baselines = ['b1', 'b2', 'b3', 'b4', 'b5']
    let arr = []
    let offset = -1;
    for(let i = 0; i < 55; i++){
        if((i + 1) % 11 == 0){
            offset += 1
        }
        if(i < seqid){
            continue
        }
        if((i + 1) % 11 == 0){
            arr.push(baselines[offset])
        } else {
            arr.push((base + i - offset - 1).toString())
        }
    }
    console.log(arr)
    arr.push('b1')
    return arr
}

app.get('/api/checkuser/:id', cors(), (req, res, next) => {
    console.log(req.params.id);

    // con.query(select_user_record, [req.params.id], (err, results, fields) =>{
    //     if(results.length == 0){
    //         let fn = takeFirst()
    //         let unique_code = uuidv4()
    //         let insert_field = [req.params.id, unique_code, toproblemset(fn)]
    //         con.query(insert_user_record, 
    //             insert_field,
    //             (err, results, fields) =>{
    //                 res.json(
    //                     {
    //                         nextId: '0',
    //                         fileName: fn,
    //                         uniqueCode: unique_code
    //                     });
    //             })
    //     } else{
    //         console.log(results[0].seqid);
    //         let fn = tofn(results[0].problemset, parseInt(results[0].seqid))
    //         let seqid = parseInt(results[0].seqid)
    //         res.json(
    //             {
    //                 nextId: results[0].seqid,
    //                 fileName: fn,
    //                 uniqueCode: results[0].uniquecode
    //             });
    //     }
    // });


    con.query(select_user_record, [req.params.id], (err, results, fields) =>{
        if(results.length == 0){
            let unique_code = uuidv4()
            con.query(
                insert_user_record, 
                [req.params.id, unique_code, '1'],
                (err, results, fields) => {
                    con.query(select_user_record, [req.params.id], (err, results, fields) =>{
                        let seqid = parseInt(results[0].seqid)
                        let problemset = results[0].problemset
                        let fn = preparefn(seqid, problemset)
                        res.json(
                            {
                                nextId: results[0].seqid,
                                fileName: fn,
                                uniqueCode: unique_code
                            }
                        )
                    })
                }
            )
        } else {
            let seqid = parseInt(results[0].seqid)
            let problemset = results[0].problemset
            let fn = preparefn(seqid, problemset)
            res.json(
                {
                    nextId: results[0].seqid,
                    fileName: fn,
                    uniqueCode: results[0].uniquecode
                }
            )
        }
    })
});

app.get('/api/makeselection/:id/:sid/:s/:pid', cors(), (req, res, next) =>{
    console.log(req.params.id);
    console.log(req.params.s);
    console.log(req.params.sid);
    var sid = req.params.sid
    if(parseInt(req.params.sid) >= 55){
        console.log("bad selection")
        res.send('ok');
    }
    con.query(select_user_record, [req.params.id], (err, results, fields)=>{
        if(parseInt(results[0].seqid) > sid){
            res.send('ok');
        }
        let nextid = (parseInt(req.params.sid) + 1).toString()
        con.query(update_seqid, 
            [nextid, req.params.id], (err, results, fields) =>{
                con.query(insert_choice, 
                    [req.params.id, req.params.pid, req.params.s], (err, results, fields) =>{}
                );
                res.send('ok');
            }
        );
    })
});

app.get('/api/getuniquecode/:id', cors(), (req, res, next) =>{
    con.query(select_user_record, [req.params.id], (err, results, fields) =>{
        if(parseInt(results[0].seqid) != '' + (task_num_per_person)){
            res.json({uniqueCode:'0'})
        } else {
            console.log('from uc api')
            console.log(req.params.id)
            console.log('unique sent')
            console.log(results[0].uniqueCode)
            res.json({uniqueCode:results[0].uniqueCode})
        }
    })
})

app.get('/api/getfile/:filepath', cors(), (req, res, next) =>{
    root_path = "public/ABC";
    //console.log(req.params.filepath)
    res.sendFile(path.join(__dirname, root_path, req.params.filepath));
});

app.get('/api/getcommet/:commet', cors(), (req, res, next) =>{
    console.log(req.params.commet)
    con.query(insert_comment, [req.params.commet], (err, results, fields) => {
        res.send('ok')
    })
})

app.use(express.static(path.join(__dirname, 'public/view')))

//const PORT = process.env.PORT || 5000;
const PORT = 80;

app.listen(PORT, () => console.log('server start on port' + PORT));

  
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "3243",
    port: 3306,
});
  
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});



// const formalselect = "select * from formal.amt50"
// const formalchoice = "select * from formal.choices50"

// con.query(formalselect,(err, results, fields)=> {
// 	// workid, uniquecode, problemset, seqid
	
// 	var good_list = {}
// 	for(var i = 0; i < results.length; i++){
// 		var wid = results[i].workid;
// 		var sid = results[i].seqid;
// 		if(sid == '55'){
// 			good_list[wid] = 0 
// 		}
// 	}

// 	const cs = {"b1":0, "b2":0, "b3":0, "b4":0, "b5":0}
// 	con.query(formalchoice, (err, results, field) =>{
// 		for(var i = 0; i < results.length; i++){
// 			var wid = results[i].workid;
// 			var pid = results[i].pid;
// 			var c = results[i].c;
// 			if((wid in good_list) && (c == "1") && (pid in cs)){
// 				good_list[wid] += 1;
// 			}
// 		}
// 		for(let k in good_list){
// 			if(good_list[k] != 5){
// 				delete good_list[k];
// 			} else {
// 				good_list[k] = 0;
// 			}
// 		}
// 		for(var i = 0; i < results.length; i++){
// 			var wid = results[i].workid;
// 			var pid = results[i].pid;
// 			var c = results[i].c;
// 			if((wid in good_list) && (c == '1')){
// 				good_list[wid] += 1;
// 			}
// 		}
// 		for(const k in good_list){
// 			if(good_list[k] == 55){
// 				delete good_list[k];
// 			} else {
// 				good_list[k] = 0
// 			}
// 		}
// 		for(var i = 0; i < results.length; i++){
// 			var wid = results[i].workid;
// 			var pid = results[i].pid;
// 			var c = results[i].c;
// 			if((wid in good_list) && !(pid in cs)){
// 				var idx = parseInt(pid);
// 				problem_set[idx] += 1;
// 			}
// 		}
// 		var count = 0;
// 		for(var i = 0; i < 100; i++){
// 			if(problem_set[i] == 5){
// 				count += 1;	
// 			}
// 		}
// 		console.log('The valid count is: ' + count)
// 	})
// })
