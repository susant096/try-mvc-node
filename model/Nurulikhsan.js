
module.exports = {
    get: function (con, callback) {
        con.query("SELECT * FROM article", callback)
    },
    add: function (con, data, callback) {
        con.query(`
        INSERT INTO article SET
        judul='${data.judul}',
        kalimat='${data.kalimat}',
        link='${data.link}'
        `, callback)
    },
    getById: function (con, id, callback) {
        con.query(`
        SELECT * FROM article WHERE id='${id}'
        `, callback)
    },
    update: function (con, data, id, callback) {
        con.query(`
        UPDATE article SET 
        judul='${data.judul}',
        kalimat='${data.kalimat}',
        link='${data.link}'
        WHERE id=${id}
        `, callback)
    }
}