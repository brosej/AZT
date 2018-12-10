import * as express from 'express'

const router = express.Router()

const selectQuery = async (req:any, res) => {
    const limit = req.query.limit;
    var page = req.query.page - 1;
    var offset = (page * limit)

        
    const [rows, fields] = await req.con.execute(`SELECT * FROM azurian_products LIMIT ? OFFSET ?`, 
    [limit, offset]);
    const countQueryRes = await req.con.execute(`SELECT COUNT(*) FROM azurian_products`) 
    res.send({products:rows, total:countQueryRes[0][0]['COUNT(*)']});
}

const insertQuery = async (req:any, res)=>{
    try {
        const { name, price, description, department } = req.body
        const [rows, fields] = await req.con.execute(`INSERT INTO azurian_products (name, price, description, department) VALUES (?, ?, ?, ?);`,
        [name, price, description, department]);
        res.send({status: 200});
    } catch (e) {
        res.send({ status: 500 })
    }
}
const updateQuery = async (req:any, res)=>{
    try{     
        const [rows, fields] = await req.con.execute(`UPDATE azurian_products SET name = ?, price = ?, description = ?, department = ? WHERE id = ?`,
        [req.body.name, req.body.price, req.body.description, req.body.department, req.body.id])
        res.send({status: 200})
    } catch (e) { 
        res.send({ status: 500 }) 
}
  


}

const deleteQuery = async (req:any, res)=>{
    try { 
        const [rows, fields] = await req.con.execute(`DELETE FROM azurian_products WHERE id = ?`,
        [req.query.deleteById])
        res.send({status: 200})
    } catch (e) { 
        res.send({ status: 500 }) 
    }
}
router.route('/')
 .get(selectQuery)
 .post(insertQuery)
 .put(updateQuery)
 .delete(deleteQuery)

export default router
