izq = 100
alt = 576
vida = localStorage.getItem("vida")
vidaene = 100
vidaene2 = 250
vidaene3 = 100
arma = 1

setTimeout(actualizarVida,100)

function actualizarVida() {
    document.getElementById("vida").innerText = "Vida: "+Math.max(vida, 0)+"/100";
}

function hacerDanio() {
    if (arma===1) {
        vidaene -= 60
    } else if (arma===2) {
        vidaene -= 80
    }
}
function hacerDanio2() {
    if (arma===1) {
        vidaene2 -= 60
    } else if (arma===2) {
        vidaene2 -= 80
    }
}
function hacerDanio3() {
    if (arma===1) {
        vidaene3 -= 60
    } else if (arma===2) {
        vidaene3 -= 80
    }
}
function restarVida(cantidad) {
    vida -= cantidad
    document.getElementById("vida").innerText = "Vida: "+Math.max(vida, 0)+"/100";
    if (vida<=0) {
        setTimeout(perder, 308);
    }
}
function caertranca() {
    restarVida(20)
}
function caer() {
    restarVida(35)
    if (vida<=0) {
        setTimeout(perder, 308);
    }
}
yapaso = 0
function moverAdelante() {
    if (izq<1675) {
        if (alt===576&&izq===325&&vidaene>0) {
            restarVida(20);
        } else if (alt===56&&izq===1150&&vidaene2>0) {
            restarVida(40);
        } else if (alt===-74&&izq===625&&vidaene3>0) {
            restarVida(20);
        }
        izq += 75;
        document.getElementById("player").style.left = izq + "px";
        if (alt===446) {
            if (izq>=925) {
                setTimeout(bajar, 305);
            }
        } else if (alt===316) {
            if (izq>700&&izq<1225) {
                setTimeout(bajar, 305);
            }
        } else if (alt===186) {
            if (izq>=625) {
                setTimeout(bajar, 305);
            }
        } else if (alt===56) {
            if (izq>=400&&izq<700) {
                setTimeout(bajar, 305);
            } else if (izq===1225){
                setTimeout(bajar, 305);
                setTimeout(bajar, 305);
            }
        } else if(alt===-74) {
            if (izq===550) {
                yapaso = 1
                seleccionarArma2()
                document.getElementById("armita").style.background = "";
                document.getElementById("armita").style.border = 0;
                document.getElementById("armita").style.height = 0;
                document.getElementById("armita").style.width = 0;
                document.getElementById("enemigo3").style.bottom = 580+"px";
                if (armasAbiertas===0) {
                    document.getElementById("arma1").style.width = 0;
                    document.getElementById("arma1").style.height = 0;
                    document.getElementById("arma2").style.width = 0;
                    document.getElementById("arma2").style.height = 0;
                } else {
                    document.getElementById("arma2danio").style.visibility = "visible";
                }
            } else if (izq===850) {
                setTimeout(bajar, 305);
            }
        }
    } else if (izq===1675&&alt===316&&vidaene<=0&&vidaene2<=0&&vidaene3<=0) {
        localStorage.setItem("vida", vida)
        localStorage.setItem("arma", arma)
        izq += 75;
        document.getElementById("player").style.left = izq + "px";
        setTimeout(siguientePantalla, 300)
    }
}
function moverAtras() {
    if (izq>25) {
        if (alt===576&&izq===400&&vidaene>0) {  // ataques enemigos
            restarVida(20);
        } else if (alt===56&&izq===1225) {      // ataques enemigos
            restarVida(40);
        } else if (alt===-74&&izq===700&&vidaene3>0) {
            restarVida(20);
        }
        izq -= 75;
        document.getElementById("player").style.left = izq + "px";
        if (alt===446) {
            if (izq<=625) {
                setTimeout(bajar, 305);
            }
        } else if (alt===316) {
            if (izq<=475||izq===1150) {
                setTimeout(bajar, 305);
                setTimeout(bajar, 305);
            } 
        } 
        else if (alt===186) {
            if (izq<=250) {
                setTimeout(bajar, 305);
                setTimeout(bajar, 305);
                setTimeout(bajar, 305);
                setTimeout(caertranca, 915);
                if (vida<=0) {
                    setTimeout(perder, 915);
                }
            }
        } 
        else if (alt===56) {
            if (izq===25) {
                setTimeout(bajar, 305);
                setTimeout(bajar, 305);
                setTimeout(bajar, 305);
                setTimeout(bajar, 305);
            } else if (izq===775) {
                setTimeout(bajar, 305);
                setTimeout(bajar, 305);
                setTimeout(bajar, 305);
            }
        } else if(alt===-74) {
            if (izq<=175) {
                setTimeout(bajar, 305);
            }
        }
    }
}
function saltar() {
    alt -= 130;
    document.getElementById("player").style.top = alt + "px";
    if (alt===446) {
        if (izq>=925||izq<=625) {
            setTimeout(bajar, 305);
        }
    } else if (alt===316) {
        if (izq!==700) {
            setTimeout(bajar, 305);
        }
    } 
    else if (alt===186) {
        if (izq>=625) {
            setTimeout(bajar, 305);
        }
    }
     else if (alt===56) {
        if (izq>=400) {
            setTimeout(bajar, 305);
        }
    } else if(alt===-74) {
        if (izq<=175||izq>=850) {
            setTimeout(bajar, 305);
        }
    } else {
        setTimeout(bajar, 305);
    }
}
function bajar() {
    if (alt<576){
        // if (alt===56&&izq>=1075) {
        //     setTimeout(caer, 915);
        // }
        
        alt += 130;
        document.getElementById("player").style.top = alt + "px";
        // if (alt===446) {
        //     if (izq>=700||izq===25) {
        //         setTimeout(bajar, 305);
        //     }
        // } 
        // else 
        if (alt===446) {
            if (izq<=625) {
                bajar();
            }}
         else if (alt===316) {
            if (izq<=475) {
                bajar();
            }
        }
        //  else if (alt===56) {
        //     if (izq<=550) {
        //         setTimeout(bajar, 305);
        //     }
        // }
    }
}
function atacar() {
    document.getElementById("arma").style.left = 25+"px";
    setTimeout(volverArma, 305);
    if (izq===325&&alt===576){
        hacerDanio()
        document.getElementById("vidaene").innerText = "Vida: "+Math.max(vidaene, 0)+"/100";
        if (vidaene<=0) {
            document.getElementById("enemigo").style.height = 10+"px";
            document.getElementById("enemigo").style.width = 70+"px";
            document.getElementById("enemigo").style.top = 262+"px";
            document.getElementById("vidaene").style.bottom = 0;
            document.getElementById("vidaene").style.top = 13+"px";
            document.getElementById("vidaene").style.right = 0;
            document.getElementById("enemigo2").style.bottom = 356+"px";
            document.getElementById("armita").style.bottom = 535+"px";
            document.getElementById("enemigo3").style.bottom = 629+"px";
            if (vidaene<=0&&vidaene2<=0&&vidaene3<=0) {
                document.getElementById("puerta").style.backgroundColor = "green"
            }
        }
    } else if (izq===1150&&alt===56){
        hacerDanio2()
        document.getElementById("vidaene2").innerText = "Vida: "+Math.max(vidaene2, 0)+"/250";
        if (vidaene2<=0) {
            document.getElementById("enemigo2").style.height = 10+"px";
            document.getElementById("enemigo2").style.width = 70+"px";
            document.getElementById("enemigo2").style.bottom = 290+"px";
            document.getElementById("vidaene2").style.top = 10+"px";
            document.getElementById("enemigo3").style.bottom = 456+"px";
            document.getElementById("armaen").style.background = "";
            document.getElementById("armaen").style.border = 0;
            document.getElementById("armaen").style.height = 0;
            document.getElementById("armaen").style.width = 0;
            if (vidaene<=0&&vidaene2<=0&&vidaene3<=0) {
                document.getElementById("puerta").style.backgroundColor = "green"
            }
        }
    } else if (alt===-74&&izq===625) {
        hacerDanio3()
        document.getElementById("vidaene3").innerText = "Vida: "+Math.max(vidaene3, 0)+"/100";
        if (vidaene3<=0) {
            document.getElementById("enemigo3").style.height = 10+"px";
            document.getElementById("enemigo3").style.width = 70+"px";
            document.getElementById("enemigo3").style.bottom = 516+"px";
            document.getElementById("vidaene3").style.top = 10+"px";
            if (vidaene<=0&&vidaene2<=0&&vidaene3<=0) {
                document.getElementById("puerta").style.backgroundColor = "green"
            }
        }
    }
}
function volverArma() {
    document.getElementById("arma").style.left = 0;
}
function ganar() {
    alert("Ganaste uraa")
}
function perder() {
    alert("Perdiste jajaja")
    window.location.href = "index.html"
}
function siguientePantalla() {
    window.location.href = "leveel3.html"
    // ganar()
}
function ataqueEnemigo() {
    ataque()
    setTimeout(volverArmaEn, 305)
}
function ataque() {
    document.getElementById("armaen").style.right = 45 + "px";
    if (izq===1150&&alt===56) {
        restarVida(60)
    }
}
function volverArmaEn() {
    document.getElementById("armaen").style.right = 20 + "px"
}
function intervalo() {
    if (vidaene2>0) {
        ataqueEnemigo()
    }
}
setInterval(intervalo, 2500)

inventarioAbierto = 0

function abrirInventario() {
    document.getElementById("arma1danio").style.visibility = "hidden";
    document.getElementById("arma2danio").style.visibility = "hidden";
    if ( inventarioAbierto===0 ) {
        document.getElementById("iarma").style.width = 100 + "px" ;
        document.getElementById("iarma").style.height = 100 + "px" ;
        document.getElementById("icasco").style.width = 100 + "px" ;
        document.getElementById("icasco").style.height = 100 + "px" ;
        document.getElementById("ipechera").style.width = 100 + "px" ;
        document.getElementById("ipechera").style.height = 100 + "px" ;
        document.getElementById("ibotas").style.width = 100 + "px" ;
        document.getElementById("ibotas").style.height = 100 + "px" ;
        document.getElementById("iarma").innerHTML = '<img src="img/armas.jpg" width="100px">'
        document.getElementById("icasco").innerHTML = '<img src="img/cascos.jpg" width="100px">'
        document.getElementById("ipechera").innerHTML = '<img src="img/pecheras.jpg" width="100px">'
        document.getElementById("ibotas").innerHTML = '<img src="img/botas.jpg" width="100px">'
        inventarioAbierto = 1
    } else {
        document.getElementById("iarma").style.width = 0 ;
        document.getElementById("iarma").style.height = 0 ;
        document.getElementById("icasco").style.width = 0 ;
        document.getElementById("icasco").style.height = 0 ;
        document.getElementById("ipechera").style.width = 0 ;
        document.getElementById("ipechera").style.height = 0 ;
        document.getElementById("ibotas").style.width = 0 ;
        document.getElementById("ibotas").style.height = 0 ;
        document.getElementById("iarma").innerHTML = '<img src="img/armas.jpg" width="0px">'
        document.getElementById("icasco").innerHTML = '<img src="img/cascos.jpg" width="0px">'
        document.getElementById("ipechera").innerHTML = '<img src="img/pecheras.jpg" width="0px">'
        document.getElementById("ibotas").innerHTML = '<img src="img/botas.jpg" width="0px">'
        inventarioAbierto = 0
        if (armasAbiertas===1) {
            armasAbiertas = 0
            document.getElementById("arma1").style.width = 0 + "px"
            document.getElementById("arma1").style.height = 0 + "px"
            document.getElementById("arma1").innerHTML = '<img src="img/arma1.jpg" width="0px">'
            document.getElementById("arma2").style.width = 0 + "px"
            document.getElementById("arma2").style.height = 0 + "px"
            document.getElementById("arma2").innerHTML = '<img src="img/arma2.jpg" width="0px">'
            document.getElementById("arma3").style.width = 0 + "px"
            document.getElementById("arma3").style.height = 0 + "px"
            document.getElementById("arma4").style.width = 0 + "px"
            document.getElementById("arma4").style.height = 0 + "px"
            document.getElementById("arma5").style.width = 0 + "px"
            document.getElementById("arma5").style.height = 0 + "px"
            document.getElementById("arma6").style.width = 0 + "px"
            document.getElementById("arma6").style.height = 0 + "px"
            document.getElementById("arma7").style.width = 0 + "px"
            document.getElementById("arma7").style.height = 0 + "px"
        } else if (cascosAbiertas===1) {
            document.getElementById("icasco").style.bottom = 556 + "px" ;
            document.getElementById("icasco").style.left = 650 + "px" ;
            icascoizq = 650
            cascosAbiertas = 0
            document.getElementById("casco1").style.width = 0 + "px"
            document.getElementById("casco1").style.height = 0 + "px"
            document.getElementById("casco2").style.width = 0 + "px"
            document.getElementById("casco2").style.height = 0 + "px"
            document.getElementById("casco3").style.width = 0 + "px"
            document.getElementById("casco3").style.height = 0 + "px"
            document.getElementById("casco4").style.width = 0 + "px"
            document.getElementById("casco4").style.height = 0 + "px"
            document.getElementById("casco5").style.width = 0 + "px"
            document.getElementById("casco5").style.height = 0 + "px"
            document.getElementById("casco6").style.width = 0 + "px"
            document.getElementById("casco6").style.height = 0 + "px"
            document.getElementById("casco7").style.width = 0 + "px"
            document.getElementById("casco7").style.height = 0 + "px"
        } else if (pecherasAbiertas===1) {
            document.getElementById("ipechera").style.bottom = 656 + "px" ;
            document.getElementById("ipechera").style.left = 780 + "px" ;
            pecherasAbiertas = 0
            document.getElementById("pechera1").style.width = 0 + "px"
            document.getElementById("pechera1").style.height = 0 + "px"
            document.getElementById("pechera2").style.width = 0 + "px"
            document.getElementById("pechera2").style.height = 0 + "px"
            document.getElementById("pechera3").style.width = 0 + "px"
            document.getElementById("pechera3").style.height = 0 + "px"
            document.getElementById("pechera4").style.width = 0 + "px"
            document.getElementById("pechera4").style.height = 0 + "px"
            document.getElementById("pechera5").style.width = 0 + "px"
            document.getElementById("pechera5").style.height = 0 + "px"
            document.getElementById("pechera6").style.width = 0 + "px"
            document.getElementById("pechera6").style.height = 0 + "px"
            document.getElementById("pechera7").style.width = 0 + "px"
            document.getElementById("pechera7").style.height = 0 + "px"
        } else if (botasAbiertas===1) {
            document.getElementById("ibotas").style.bottom = 756 + "px" ;
            document.getElementById("ibotas").style.left = 910 + "px" ;
            botasAbiertas = 0
            document.getElementById("botas1").style.width = 0 + "px"
            document.getElementById("botas1").style.height = 0 + "px"
            document.getElementById("botas2").style.width = 0 + "px"
            document.getElementById("botas2").style.height = 0 + "px"
            document.getElementById("botas3").style.width = 0 + "px"
            document.getElementById("botas3").style.height = 0 + "px"
            document.getElementById("botas4").style.width = 0 + "px"
            document.getElementById("botas4").style.height = 0 + "px"
            document.getElementById("botas5").style.width = 0 + "px"
            document.getElementById("botas5").style.height = 0 + "px"
            document.getElementById("botas6").style.width = 0 + "px"
            document.getElementById("botas6").style.height = 0 + "px"
            document.getElementById("botas7").style.width = 0 + "px"
            document.getElementById("botas7").style.height = 0 + "px"
        }
    }    
}

armasAbiertas = 0

function abrirArmas() {
    if (armasAbiertas===0) {
        document.getElementById("icasco").style.width = 0 ;
        document.getElementById("icasco").style.height = 0 ;
        document.getElementById("ipechera").style.width = 0 ;
        document.getElementById("ipechera").style.height = 0 ;
        document.getElementById("ibotas").style.width = 0 ;
        document.getElementById("ibotas").style.height = 0 ;
        document.getElementById("icasco").innerHTML = '<img src="img/cascos.jpg" width="0px">'
        document.getElementById("ipechera").innerHTML = '<img src="img/pecheras.jpg" width="0px">'
        document.getElementById("ibotas").innerHTML = '<img src="img/botas.jpg" width="0px">'
        armasAbiertas = 1
        document.getElementById("arma1").style.width = 100 + "px"
        document.getElementById("arma1").style.height = 100 + "px"
        document.getElementById("arma2").style.width = 100 + "px"
        document.getElementById("arma2").style.height = 100 + "px"
        document.getElementById("arma3").style.width = 100 + "px"
        document.getElementById("arma3").style.height = 100 + "px"
        document.getElementById("arma4").style.width = 100 + "px"
        document.getElementById("arma4").style.height = 100 + "px"
        document.getElementById("arma5").style.width = 100 + "px"
        document.getElementById("arma5").style.height = 100 + "px"
        document.getElementById("arma6").style.width = 100 + "px"
        document.getElementById("arma6").style.height = 100 + "px"
        document.getElementById("arma7").style.width = 100 + "px"
        document.getElementById("arma7").style.height = 100 + "px"
        if (arma===1&&yapaso===0) {
            document.getElementById("arma1").innerHTML = '<img src="img/arma1s.jpg" width="100px">'
            document.getElementById("arma2").innerHTML = '<img src="img/arma2.jpg" width="0px">'
        } else if (arma===2&&yapaso===1) {
            document.getElementById("arma1").innerHTML = '<img src="img/arma1.jpg" width="100px">'
            document.getElementById("arma2").innerHTML = '<img src="img/arma2s.jpg" width="100px">'
        } else if (arma===1&&yapaso===1) {
            document.getElementById("arma1").innerHTML = '<img src="img/arma1s.jpg" width="100px">'
            document.getElementById("arma2").innerHTML = '<img src="img/arma2.jpg" width="100px">'
        }
        document.getElementById("arma1danio").style.visibility = "visible";
        if (yapaso===1) {
            document.getElementById("arma2danio").style.visibility = "visible";
        }
    } else {
        document.getElementById("icasco").style.width = 100 + "px" ;
        document.getElementById("icasco").style.height = 100 + "px" ;
        document.getElementById("ipechera").style.width = 100 + "px" ;
        document.getElementById("ipechera").style.height = 100 + "px" ;
        document.getElementById("ibotas").style.width = 100 + "px" ;
        document.getElementById("ibotas").style.height = 100 + "px" ;
        document.getElementById("icasco").innerHTML = '<img src="img/cascos.jpg" width="100px">'
        document.getElementById("ipechera").innerHTML = '<img src="img/pecheras.jpg" width="100px">'
        document.getElementById("ibotas").innerHTML = '<img src="img/botas.jpg" width="100px">'
        armasAbiertas = 0
        document.getElementById("arma1").style.width = 0 + "px"
        document.getElementById("arma1").style.height = 0 + "px"
        document.getElementById("arma1").innerHTML = '<img src="img/arma1.jpg" width="0px">'
        document.getElementById("arma2").style.width = 0 + "px"
        document.getElementById("arma2").style.height = 0 + "px"
        document.getElementById("arma2").innerHTML = '<img src="img/arma2.jpg" width="0px">'
        document.getElementById("arma3").style.width = 0 + "px"
        document.getElementById("arma3").style.height = 0 + "px"
        document.getElementById("arma4").style.width = 0 + "px"
        document.getElementById("arma4").style.height = 0 + "px"
        document.getElementById("arma5").style.width = 0 + "px"
        document.getElementById("arma5").style.height = 0 + "px"
        document.getElementById("arma6").style.width = 0 + "px"
        document.getElementById("arma6").style.height = 0 + "px"
        document.getElementById("arma7").style.width = 0 + "px"
        document.getElementById("arma7").style.height = 0 + "px"
        document.getElementById("arma1danio").style.visibility = "hidden";
        document.getElementById("arma2danio").style.visibility = "hidden";
    }
}

cascosAbiertas = 0
icascoizq = 650

function abrirCascos() {
    if (cascosAbiertas===0) {
        document.getElementById("iarma").style.width = 0 ;
        document.getElementById("iarma").style.height = 0 ;
        document.getElementById("ipechera").style.width = 0 ;
        document.getElementById("ipechera").style.height = 0 ;
        document.getElementById("ibotas").style.width = 0 ;
        document.getElementById("ibotas").style.height = 0 ;
        document.getElementById("iarma").innerHTML = '<img src="img/armas.jpg" width="0px">'
        document.getElementById("ipechera").innerHTML = '<img src="img/pecheras.jpg" width="0px">'
        document.getElementById("ibotas").innerHTML = '<img src="img/botas.jpg" width="0px">'
        document.getElementById("icasco").style.bottom = 456 + "px" ;
        document.getElementById("icasco").style.left = 520 + "px" ;
        icascoizq = 520
        cascosAbiertas = 1
        document.getElementById("casco1").style.width = 100 + "px"
        document.getElementById("casco1").style.height = 100 + "px"
        document.getElementById("casco2").style.width = 100 + "px"
        document.getElementById("casco2").style.height = 100 + "px"
        document.getElementById("casco3").style.width = 100 + "px"
        document.getElementById("casco3").style.height = 100 + "px"
        document.getElementById("casco4").style.width = 100 + "px"
        document.getElementById("casco4").style.height = 100 + "px"
        document.getElementById("casco5").style.width = 100 + "px"
        document.getElementById("casco5").style.height = 100 + "px"
        document.getElementById("casco6").style.width = 100 + "px"
        document.getElementById("casco6").style.height = 100 + "px"
        document.getElementById("casco7").style.width = 100 + "px"
        document.getElementById("casco7").style.height = 100 + "px"
    } else {
        document.getElementById("iarma").style.width = 100 + "px" ;
        document.getElementById("iarma").style.height = 100 + "px" ;
        document.getElementById("ipechera").style.width = 100 + "px" ;
        document.getElementById("ipechera").style.height = 100 + "px" ;
        document.getElementById("ibotas").style.width = 100 + "px" ;
        document.getElementById("ibotas").style.height = 100 + "px" ;
        document.getElementById("iarma").innerHTML = '<img src="img/armas.jpg" width="100px">'
        document.getElementById("ipechera").innerHTML = '<img src="img/pecheras.jpg" width="100px">'
        document.getElementById("ibotas").innerHTML = '<img src="img/botas.jpg" width="100px">'
        document.getElementById("icasco").style.bottom = 556 + "px" ;
        document.getElementById("icasco").style.left = 650 + "px" ;
        icascoizq = 650
        cascosAbiertas = 0
        document.getElementById("casco1").style.width = 0 + "px"
        document.getElementById("casco1").style.height = 0 + "px"
        document.getElementById("casco2").style.width = 0 + "px"
        document.getElementById("casco2").style.height = 0 + "px"
        document.getElementById("casco3").style.width = 0 + "px"
        document.getElementById("casco3").style.height = 0 + "px"
        document.getElementById("casco4").style.width = 0 + "px"
        document.getElementById("casco4").style.height = 0 + "px"
        document.getElementById("casco5").style.width = 0 + "px"
        document.getElementById("casco5").style.height = 0 + "px"
        document.getElementById("casco6").style.width = 0 + "px"
        document.getElementById("casco6").style.height = 0 + "px"
        document.getElementById("casco7").style.width = 0 + "px"
        document.getElementById("casco7").style.height = 0 + "px"
    }
}

pecherasAbiertas = 0

function abrirPecheras() {
    if (pecherasAbiertas===0) {
        document.getElementById("icasco").style.width = 0 ;
        document.getElementById("icasco").style.height = 0 ;
        document.getElementById("iarma").style.width = 0 ;
        document.getElementById("iarma").style.height = 0 ;
        document.getElementById("ibotas").style.width = 0 ;
        document.getElementById("ibotas").style.height = 0 ;
        document.getElementById("icasco").innerHTML = '<img src="img/cascos.jpg" width="0px">'
        document.getElementById("iarma").innerHTML = '<img src="img/armas.jpg" width="0px">'
        document.getElementById("ibotas").innerHTML = '<img src="img/botas.jpg" width="0px">'
        document.getElementById("ipechera").style.bottom = 456 + "px" ;
        document.getElementById("ipechera").style.left = 520 + "px" ;
        pecherasAbiertas = 1
        document.getElementById("pechera1").style.width = 100 + "px"
            document.getElementById("pechera1").style.height = 100 + "px"
            document.getElementById("pechera2").style.width = 100 + "px"
            document.getElementById("pechera2").style.height = 100 + "px"
            document.getElementById("pechera3").style.width = 100 + "px"
            document.getElementById("pechera3").style.height = 100 + "px"
            document.getElementById("pechera4").style.width = 100 + "px"
            document.getElementById("pechera4").style.height = 100 + "px"
            document.getElementById("pechera5").style.width = 100 + "px"
            document.getElementById("pechera5").style.height = 100 + "px"
            document.getElementById("pechera6").style.width = 100 + "px"
            document.getElementById("pechera6").style.height = 100 + "px"
            document.getElementById("pechera7").style.width = 100 + "px"
            document.getElementById("pechera7").style.height = 100 + "px"
    } else {
        document.getElementById("icasco").style.width = 100 + "px" ;
        document.getElementById("icasco").style.height = 100 + "px" ;
        document.getElementById("iarma").style.width = 100 + "px" ;
        document.getElementById("iarma").style.height = 100 + "px" ;
        document.getElementById("ibotas").style.width = 100 + "px" ;
        document.getElementById("ibotas").style.height = 100 + "px" ;
        document.getElementById("icasco").innerHTML = '<img src="img/cascos.jpg" width="100px">'
        document.getElementById("iarma").innerHTML = '<img src="img/armas.jpg" width="100px">'
        document.getElementById("ibotas").innerHTML = '<img src="img/botas.jpg" width="100px">'
        document.getElementById("ipechera").style.bottom = 656 + "px" ;
        document.getElementById("ipechera").style.left = 780 + "px" ;
        pecherasAbiertas = 0
        document.getElementById("pechera1").style.width = 0 + "px"
            document.getElementById("pechera1").style.height = 0 + "px"
            document.getElementById("pechera2").style.width = 0 + "px"
            document.getElementById("pechera2").style.height = 0 + "px"
            document.getElementById("pechera3").style.width = 0 + "px"
            document.getElementById("pechera3").style.height = 0 + "px"
            document.getElementById("pechera4").style.width = 0 + "px"
            document.getElementById("pechera4").style.height = 0 + "px"
            document.getElementById("pechera5").style.width = 0 + "px"
            document.getElementById("pechera5").style.height = 0 + "px"
            document.getElementById("pechera6").style.width = 0 + "px"
            document.getElementById("pechera6").style.height = 0 + "px"
            document.getElementById("pechera7").style.width = 0 + "px"
            document.getElementById("pechera7").style.height = 0 + "px"
    }
}

botasAbiertas = 0

function abrirBotas() {
    if (botasAbiertas===0) {
        document.getElementById("icasco").style.width = 0 ;
        document.getElementById("icasco").style.height = 0 ;
        document.getElementById("iarma").style.width = 0 ;
        document.getElementById("iarma").style.height = 0 ;
        document.getElementById("ipechera").style.width = 0 ;
        document.getElementById("ipechera").style.height = 0 ;
        document.getElementById("icasco").innerHTML = '<img src="img/cascos.jpg" width="0px">'
        document.getElementById("iarma").innerHTML = '<img src="img/armas.jpg" width="0px">'
        document.getElementById("ipechera").innerHTML = '<img src="img/pecheras.jpg" width="0px">'
        document.getElementById("ibotas").style.bottom = 456 + "px" ;
        document.getElementById("ibotas").style.left = 520 + "px" ;
        botasAbiertas = 1
        document.getElementById("botas1").style.width = 100 + "px"
        document.getElementById("botas1").style.height = 100 + "px"
        document.getElementById("botas2").style.width = 100 + "px"
        document.getElementById("botas2").style.height = 100 + "px"
        document.getElementById("botas3").style.width = 100 + "px"
        document.getElementById("botas3").style.height = 100 + "px"
        document.getElementById("botas4").style.width = 100 + "px"
        document.getElementById("botas4").style.height = 100 + "px"
        document.getElementById("botas5").style.width = 100 + "px"
        document.getElementById("botas5").style.height = 100 + "px"
        document.getElementById("botas6").style.width = 100 + "px"
        document.getElementById("botas6").style.height = 100 + "px"
        document.getElementById("botas7").style.width = 100 + "px"
        document.getElementById("botas7").style.height = 100 + "px"
    } else {
        document.getElementById("icasco").style.width = 100 + "px" ;
        document.getElementById("icasco").style.height = 100 + "px" ;
        document.getElementById("iarma").style.width = 100 + "px" ;
        document.getElementById("iarma").style.height = 100 + "px" ;
        document.getElementById("ipechera").style.width = 100 + "px" ;
        document.getElementById("ipechera").style.height = 100 + "px" ;
        document.getElementById("icasco").innerHTML = '<img src="img/cascos.jpg" width="100px">'
        document.getElementById("iarma").innerHTML = '<img src="img/armas.jpg" width="100px">'
        document.getElementById("ipechera").innerHTML = '<img src="img/pecheras.jpg" width="100px">'
        document.getElementById("ibotas").style.bottom = 756 + "px" ;
        document.getElementById("ibotas").style.left = 910 + "px" ;
        botasAbiertas = 0
        document.getElementById("botas1").style.width = 0 + "px"
        document.getElementById("botas1").style.height = 0 + "px"
        document.getElementById("botas2").style.width = 0 + "px"
        document.getElementById("botas2").style.height = 0 + "px"
        document.getElementById("botas3").style.width = 0 + "px"
        document.getElementById("botas3").style.height = 0 + "px"
        document.getElementById("botas4").style.width = 0 + "px"
        document.getElementById("botas4").style.height = 0 + "px"
        document.getElementById("botas5").style.width = 0 + "px"
        document.getElementById("botas5").style.height = 0 + "px"
        document.getElementById("botas6").style.width = 0 + "px"
        document.getElementById("botas6").style.height = 0 + "px"
        document.getElementById("botas7").style.width = 0 + "px"
        document.getElementById("botas7").style.height = 0 + "px"
    }
}

function seleccionarArma1() {
    arma = 1
    document.getElementById("arma1").innerHTML = '<img src="img/arma1s.jpg" width="100px">'
    document.getElementById("arma").style.background = "grey";
    document.getElementById("arma").style.border = 2+"px solid red";
    document.getElementById("arma").style.height = 10+"px";
    document.getElementById("arma").style.width = 30+"px";
    if (yapaso===1) {
        document.getElementById("arma2").innerHTML = '<img src="img/arma2.jpg" width="100px">'
    }
}
function seleccionarArma2() {
    if (yapaso===1) {
        arma = 2
        if (armasAbiertas===1) {
            document.getElementById("arma1").innerHTML = '<img src="img/arma1.jpg" width="100px">'
            document.getElementById("arma2").innerHTML = '<img src="img/arma2s.jpg" width="100px">'
        }
        document.getElementById("arma").style.background = "darkblue";
        document.getElementById("arma").style.border = 2+"px solid white";
        document.getElementById("arma").style.height = 8+"px";
        document.getElementById("arma").style.width = 45+"px";
    }
}