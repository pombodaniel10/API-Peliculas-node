"use strict"
const express = require('express');
const router = express.Router();
const Pelicula = require('../models/pelicula');

router.post('/add',(req,res) => {
    let newPelicula = new Pelicula({
        titulo: req.body.titulo,
        fechaLanzamiento: req.body.fechaLanzamiento,
        genero: req.body.genero,
        precio: req.body.precio
    });
    Pelicula.addPelicula(newPelicula,(err,pelicula) =>{
        if(err){
            res.json({"success":false, "msg":'Error al intentar añadir la pelicula.'});
        }else{
            res.json({"success":true, "msg":'Pelicula añadida.'});
        }
    });
    
});

router.put('/editar/:id',(req,res) => {
        let newPelicula = new Pelicula({
            titulo: req.body.titulo,
            fechaLanzamiento: req.body.fechaLanzamiento,
            genero: req.body.genero,
            precio: req.body.precio
        });
        Pelicula.editPelicula(req.params.id,newPelicula,(err,pelicula) =>{
            if(err){
                res.json({"success":false, "msg":'Error al intentar editar la pelicula.'});
            }else{
                res.json({"success":true, "msg":'Pelicula actualizada.'});
            }
        })
});



router.get('/getAll', (req,res) => {
    Pelicula.find((err,peliculas) => {
        if(err) throw err;
        if(!peliculas){
          return res.json({"success":false, "msg": 'Peliculas no encontrados.'});
        } else {
          return res.json(peliculas);
        }
    });
  });

router.get('/:id',(req,res)=>{
    Pelicula.getPeliculaById(req.params.id,(err,pelicula) => {
        if(err){
            res.json({"success":false, "msg":'Error al intentar buscar la pelicula'});
        }
        if(!pelicula){
            res.json({"success":false, "msg":'No hay peliculas con ese ID.'});
        }else{
            res.json(pelicula);
        }
    });
  });

router.delete('/delete/:id',(req,res)=>{
    Pelicula.deletePelicula(req.params.id,(err,pelicula) => {
        if(err){
            res.json({"success":false, "msg":'Error al intentar borrar la pelicula'});
        }
        if(pelicula){
            res.json({"success":true, "msg":'Pelicula eliminada.'});
        }
    });
  });



module.exports = router;