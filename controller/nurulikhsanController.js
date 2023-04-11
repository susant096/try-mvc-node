const Nurulikhsan = require("../model/Nurulikhsan")
module.exports = {
    index: function (req, res) {

        let data = {
            title: 'Landing Page',
            content: 'pages/main'
        }

        Nurulikhsan.get(req.con, function (err, rows) {
            res.render('layouts/wrapper', { data, rows })
        })
    },
    article: function (req, res) {
        let data = {
            title: 'Tambah Artikel',
            content: 'pages/article'
        }
        res.render('layouts/wrapper', { data })
    },
    addArticle: function (req, res) {
        Nurulikhsan.add(req.con, req.body, function (err) {
            res.redirect("/")
        })
    },
    edit: function (req, res) {
        let data = {
            title: 'Edit Card Artikel',
            content: 'pages/edit'
        }
        Nurulikhsan.getById(req.con, req.params.id, function (err, rows) {
            res.render('layouts/wrapper', { data, rows: rows[0] })
        })
    },
    update: function (req, res) {
        Nurulikhsan.update(req.con, req.body, req.params.id, function (err) {
            res.redirect("/")
        })
    }
}