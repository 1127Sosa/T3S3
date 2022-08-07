
class movie{
    constructor(nombrePelicula, anio, duracion, genero, director, sinopsis, puntuacion){
        this.nombrePelicula = nombrePelicula
        this.anio = anio
        this.duracion = duracion
        this.genero = genero
        this.director = director
        this.sinopsis = sinopsis
        this.puntuacion = puntuacion
    }

    InformacionCompleta(){
        return this.nombrePelicula + " " + this.anio + " " + this.duracion + " " + this.genero + " " + this.director
    }

    Sinopsis(){
        return this.sinopsis
    }

    Puntuacion(){
        return this.puntuacion 
    }


}

var bs_pelis = [ 
    new movie("Identidad virtual", "2014", "1h 59m", "Ciencia ficción/Acción", "Wally Pfister", "El Dr. Will Caster, la mayor autoridad del mundo en inteligencia artificial, está llevando a cabo experimentos muy controvertidos para crear una máquina muy especial.", "5"),
    new movie("Sonic", "2021", "1h 50m", "Infantil", "Jeff Fowler", "Sonic intenta navegar por las complejidades de la vida en la Tierra con su nuevo mejor amigo, un humano llamado Tom Wachowski", "5")
]


bs_pelis.push(new movie("Lightyear", "2022", "1h 45m", "Aventura/Ciencia ficción", "Angus MacLane", "Buzz Lightyear se embarca en una aventura intergaláctica con un grupo de reclutas ambiciosos y su compañero robot.", "2"))

console.log("Base de datos de Peliculas", bs_pelis); 

