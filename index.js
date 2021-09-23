const express = require('express');
const mysql = require('mysql');
const path = require('path');
const app = express();
const cors = require('cors');
const uuidv4 = require("uuid/v4");

const insert_user_record = 'INSERT INTO users.amt20 (workid, uniquecode, problemset) VALUES (?, ?, ?)';
const select_user_record = 'SELECT * FROM users.amt20 where workid = ?'
const update_seqid = 'UPDATE users.amt20 SET seqid = ? where userid = ?';
const insert_choice = 'INSERT INTO users.choices (workid, pid, c) VALUES (?, ?, ?)';

const total_tasks = 98
const task_num_per_person = 20
const pid_length = 5

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
    return arr.slice(0, first);
}

app.get('/api/checkuser/:id', cors(), (req, res, next) => {
    console.log(req.params.id);
    con.query(select_user_record, [req.params.id], (err, results, fields) =>{
        if(results.length == 0){
            let fn = takeFirst()
            let unique_code = uuidv4()
            let insert_field = [req.params.id, unique_code, toproblemset(fn)]
            con.query(insert_user_record, 
                insert_field,
                (err, results, fields) =>{
                    res.json(
                        {
                            nextId: '0',
                            fileName: fn
                        });
                })
        } else{
            console.log(results[0].seqid);
            let fn = tofn(results[0].problemset, parseInt(results[0].seqid))
            let seqid = parseInt(results[0].seqid)
            res.json(
                {
                    nextId: results[0].seqid,
                    fileName: fn
                });
        }
    });
});

app.get('/api/makeselection/:id/:sid/:s/:pid', cors(), (req, res, next) =>{
    console.log(req.params.id);
    console.log(req.params.s);
    console.log(req.params.sid);
    var sid = req.params.sid
    con.query(select_user_record, [req.params.id], (err, results, fields) => {
        if(results.length == 0){
            res.status(400).end()
        } else {
            if(sid != results[0].seqid){
                console.log(results[0])
                res.status(400).end()
            }
        }
    })
    let nextid = (parseInt(req.params.sid) + 1).toString()
    con.query(update_seqid, 
        [nextid, req.params.id], (err, results, fields) =>{
    });
    con.query(insert_choice, 
        [req.params.id, req.params.pid, req.params.s], (err, results, fields) =>{
    });
    res.send('ok');
});

app.get('/api/getuniquecode/:id', cors(), (req, res, next) =>{
    con.query(select_user_record, [req.params.id], (err, results, fields) =>{
        if(parseInt(results[0].seqid) != task_num_per_person){
            res.json({uniqueCode:'0'})
        } else {
            res.json({uniqueCode:results[0].uniqueCode})
        }
    })
})

app.get('/api/getfile/:filepath', cors(), (req, res, next) =>{
    root_path = "public/data_out";
    console.log(req.params.filepath)
    res.sendFile(path.join(__dirname, root_path, req.params.filepath));
});

app.use(express.static(path.join(__dirname, 'public/view')))

//const PORT = process.env.PORT || 5000;
const PORT = 80;

app.listen(PORT, () => console.log('server start on port' + PORT));

  
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "3243",
    port: 3306
});
  
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});


