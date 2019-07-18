var p1 = prompt("Qual é o nome do Jogador 1?")
var p2 = prompt("Qual é o nome do Jogador 2?")
var count  = [5, 5, 5, 5, 5, 5, 5, 5];
var button_click = 0;

$('#text2').text(p1+" inicie o jogo. Você será a cor azul enquanto "+p2+" a vermelha. Escolhe uma coluna e jogue.")

function buttonClickCounter() {
  button_click += 1;
  // diagnonalVerification()
  console.log(button_click);
}

function horizontalVerification() {
  var conf = 0;
  if (button_click%2 != 0) {
  for (var i = 0; i <= 4; i++) {
    if ($('.1').eq(i).css('background-color') == 'rgb(0, 0, 255)'  ) {
      conf +=1;
      if ($('.1').eq(i +1).css('background-color') == 'rgb(0, 0, 255)'  ) {
        conf +=1;
        if ($('.1').eq(i + 2).css('background-color') == 'rgb(0, 0, 255)'  ) {
          conf +=1;
          if ($('.1').eq(i + 3).css('background-color') == 'rgb(0, 0, 255)'  ) {
            conf +=1;
            if (conf == 4 ) {
              if(!alert("O jogador "+p1+" ganhou!")){window.location.reload();}
          }
        }
      }
    }
  }

  }
  var conf = 0;
  for (var i = 0; i <= 4; i++) {
    if ($('.2').eq(i).css('background-color') == 'rgb(0, 0, 255)'  ) {
      conf +=1;
      if ($('.2').eq(i +1).css('background-color') == 'rgb(0, 0, 255)'  ) {
        conf +=1;
        if ($('.2').eq(i + 2).css('background-color') == 'rgb(0, 0, 255)'  ) {
          conf +=1;
          if ($('.2').eq(i + 3).css('background-color') == 'rgb(0, 0, 255)'  ) {
            conf +=1;
            if (conf == 4 ) {
              if(!alert("O jogador "+p1+" ganhou!")){window.location.reload();}
          }
        }
      }
    }
  }

  }
  var conf = 0;
  for (var i = 0; i <= 4; i++) {
    if ($('.3').eq(i).css('background-color') == 'rgb(0, 0, 255)'  ) {
      conf +=1;
      if ($('.3').eq(i +1).css('background-color') == 'rgb(0, 0, 255)'  ) {
        conf +=1;
        if ($('.3').eq(i + 2).css('background-color') == 'rgb(0, 0, 255)'  ) {
          conf +=1;
          if ($('.3').eq(i + 3).css('background-color') == 'rgb(0, 0, 255)'  ) {
            conf +=1;
            if (conf == 4 ) {
              if(!alert("O jogador "+p1+" ganhou!")){window.location.reload();}
          }
        }
      }
    }
  }

  }
  var conf = 0;
  for (var i = 0; i <= 4; i++) {
    if ($('.4').eq(i).css('background-color') == 'rgb(0, 0, 255)'  ) {
      conf +=1;
      if ($('.4').eq(i +1).css('background-color') == 'rgb(0, 0, 255)'  ) {
        conf +=1;
        if ($('.4').eq(i + 2).css('background-color') == 'rgb(0, 0, 255)'  ) {
          conf +=1;
          if ($('.4').eq(i + 3).css('background-color') == 'rgb(0, 0, 255)'  ) {
            conf +=1;
            if (conf == 4 ) {
            if(!alert("O jogador "+p1+" ganhou!")){window.location.reload();}
          }
        }
      }
    }
  }

  }
  var conf = 0;
  for (var i = 0; i <= 4; i++) {
    if ($('.5').eq(i).css('background-color') == 'rgb(0, 0, 255)'  ) {
      conf +=1;
      if ($('.5').eq(i +1).css('background-color') == 'rgb(0, 0, 255)'  ) {
        conf +=1;
        if ($('.5').eq(i + 2).css('background-color') == 'rgb(0, 0, 255)'  ) {
          conf +=1;
          if ($('.5').eq(i + 3).css('background-color') == 'rgb(0, 0, 255)'  ) {
            conf +=1;
            if (conf == 4 ) {
            if(!alert("O jogador "+p1+" ganhou!")){window.location.reload();}
          }
        }
      }
    }
  }

  }
  var conf = 0;
  for (var i = 0; i <= 4; i++) {
    if ($('.6').eq(i).css('background-color') == 'rgb(0, 0, 255)'  ) {
      conf +=1;
      if ($('.6').eq(i +1).css('background-color') == 'rgb(0, 0, 255)'  ) {
        conf +=1;
        if ($('.6').eq(i + 2).css('background-color') == 'rgb(0, 0, 255)'  ) {
          conf +=1;
          if ($('.6').eq(i + 3).css('background-color') == 'rgb(0, 0, 255)'  ) {
            conf +=1;
            if (conf == 4 ) {
              if(!alert("O jogador "+p1+" ganhou!")){window.location.reload();}
          }
        }
      }
    }
  }

  }
  var conf = 0;
} else {
    for (var i = 0; i <= 4; i++) {
      if ($('.1').eq(i).css('background-color') == 'rgb(255, 0, 0)'  ) {
        conf +=1;
        if ($('.1').eq(i +1).css('background-color') == 'rgb(255, 0, 0)'  ) {
          conf +=1;
          if ($('.1').eq(i + 2).css('background-color') == 'rgb(255, 0, 0)'  ) {
            conf +=1;
            if ($('.1').eq(i + 3).css('background-color') == 'rgb(255, 0, 0)'  ) {
              conf +=1;
              if (conf == 4 ) {
                if(!alert("O jogador "+p2+" ganhou!")){window.location.reload();}
            }
          }
        }
      }
    }

    }
    var conf = 0;
    for (var i = 0; i <= 4; i++) {
      if ($('.2').eq(i).css('background-color') == 'rgb(255, 0, 0)'  ) {
        conf +=1;
        if ($('.2').eq(i +1).css('background-color') == 'rgb(255, 0, 0)'  ) {
          conf +=1;
          if ($('.2').eq(i + 2).css('background-color') == 'rgb(255, 0, 0)'  ) {
            conf +=1;
            if ($('.2').eq(i + 3).css('background-color') == 'rgb(255, 0, 0)'  ) {
              conf +=1;
              if (conf == 4 ) {
                if(!alert("O jogador "+p2+" ganhou!")){window.location.reload();}
            }
          }
        }
      }
    }

    }
    var conf = 0;
    for (var i = 0; i <= 4; i++) {
      if ($('.3').eq(i).css('background-color') == 'rgb(255, 0, 0)'  ) {
        conf +=1;
        if ($('.3').eq(i +1).css('background-color') == 'rgb(255, 0, 0)'  ) {
          conf +=1;
          if ($('.3').eq(i + 2).css('background-color') == 'rgb(255, 0, 0)'  ) {
            conf +=1;
            if ($('.3').eq(i + 3).css('background-color') == 'rgb(255, 0, 0)'  ) {
              conf +=1;
              if (conf == 4 ) {
                if(!alert("O jogador "+p2+" ganhou!")){window.location.reload();}
            }
          }
        }
      }
    }

    }
    var conf = 0;
    for (var i = 0; i <= 4; i++) {
      if ($('.4').eq(i).css('background-color') == 'rgb(255, 0, 0)'  ) {
        conf +=1;
        if ($('.4').eq(i +1).css('background-color') == 'rgb(255, 0, 0)'  ) {
          conf +=1;
          if ($('.4').eq(i + 2).css('background-color') == 'rgb(255, 0, 0)'  ) {
            conf +=1;
            if ($('.4').eq(i + 3).css('background-color') == 'rgb(255, 0, 0)'  ) {
              conf +=1;
              if (conf == 4 ) {
                  if(!alert("O jogador "+p2+" ganhou!")){window.location.reload();}
            }
          }
        }
      }
    }

    }
    var conf = 0;
    for (var i = 0; i <= 4; i++) {
      if ($('.5').eq(i).css('background-color') == 'rgb(255, 0, 0)'  ) {
        conf +=1;
        if ($('.5').eq(i +1).css('background-color') == 'rgb(255, 0, 0)'  ) {
          conf +=1;
          if ($('.5').eq(i + 2).css('background-color') == 'rgb(255, 0, 0)'  ) {
            conf +=1;
            if ($('.5').eq(i + 3).css('background-color') == 'rgb(255, 0, 0)'  ) {
              conf +=1;
              if (conf == 4 ) {
                if(!alert("O jogador "+p2+" ganhou!")){window.location.reload();}
            }
          }
        }
      }
    }

    }
    var conf = 0;
    for (var i = 0; i <= 4; i++) {
      if ($('.6').eq(i).css('background-color') == 'rgb(255, 0, 0)'  ) {
        conf +=1;
        if ($('.6').eq(i +1).css('background-color') == 'rgb(255, 0, 0)'  ) {
          conf +=1;
          if ($('.6').eq(i + 2).css('background-color') == 'rgb(255, 0, 0)'  ) {
            conf +=1;
            if ($('.6').eq(i + 3).css('background-color') == 'rgb(255, 0, 0)'  ) {
              conf +=1;
              if (conf == 4 ) {
                if(!alert("O jogador "+p2+" ganhou!")){window.location.reload();}
            }
          }
        }
      }
    }

    }
    var conf = 0;
  }

}

function verticalVerification(){
  var conf = 0;
if (button_click%2 != 0) {
for (var i = 0; i <= 4; i++) {
  if ($('.col1').eq(i).css('background-color') == 'rgb(0, 0, 255)'  ) {
    conf +=1;
    if ($('.col1').eq(i +1).css('background-color') == 'rgb(0, 0, 255)'  ) {
      conf +=1;
      if ($('.col1').eq(i + 2).css('background-color') == 'rgb(0, 0, 255)'  ) {
        conf +=1;
        if ($('.col1').eq(i + 3).css('background-color') == 'rgb(0, 0, 255)'  ) {
          conf +=1;
          if (conf == 4 ) {
          if(!alert("O jogador "+p1+" ganhou!")){window.location.reload();}
        }
      }
    }
  }
}

}
var conf = 0;
for (var i = 0; i <= 4; i++) {
  if ($('.col2').eq(i).css('background-color') == 'rgb(0, 0, 255)'  ) {
    conf +=1;
    if ($('.col2').eq(i +1).css('background-color') == 'rgb(0, 0, 255)'  ) {
      conf +=1;
      if ($('.col2').eq(i + 2).css('background-color') == 'rgb(0, 0, 255)'  ) {
        conf +=1;
        if ($('.col2').eq(i + 3).css('background-color') == 'rgb(0, 0, 255)'  ) {
          conf +=1;
          if (conf == 4 ) {
          if(!alert("O jogador "+p1+" ganhou!")){window.location.reload();}
        }
      }
    }
  }
}

}
var conf = 0;
for (var i = 0; i <= 4; i++) {
  if ($('.col3').eq(i).css('background-color') == 'rgb(0, 0, 255)'  ) {
    conf +=1;
    if ($('.col3').eq(i +1).css('background-color') == 'rgb(0, 0, 255)'  ) {
      conf +=1;
      if ($('.col3').eq(i + 2).css('background-color') == 'rgb(0, 0, 255)'  ) {
        conf +=1;
        if ($('.col3').eq(i + 3).css('background-color') == 'rgb(0, 0, 255)'  ) {
          conf +=1;
          if (conf == 4 ) {
          if(!alert("O jogador "+p1+" ganhou!")){window.location.reload();}
        }
      }
    }
  }
}

}
var conf = 0;
for (var i = 0; i <= 4; i++) {
  if ($('.col4').eq(i).css('background-color') == 'rgb(0, 0, 255)'  ) {
    conf +=1;
    if ($('.col4').eq(i +1).css('background-color') == 'rgb(0, 0, 255)'  ) {
      conf +=1;
      if ($('.col4').eq(i + 2).css('background-color') == 'rgb(0, 0, 255)'  ) {
        conf +=1;
        if ($('.col4').eq(i + 3).css('background-color') == 'rgb(0, 0, 255)'  ) {
          conf +=1;
          if (conf == 4 ) {
            if(!alert("O jogador "+p1+" ganhou!")){window.location.reload();}
        }
      }
    }
  }
}

}
var conf = 0;
for (var i = 0; i <= 4; i++) {
  if ($('.col5').eq(i).css('background-color') == 'rgb(0, 0, 255)'  ) {
    conf +=1;
    if ($('.col5').eq(i +1).css('background-color') == 'rgb(0, 0, 255)'  ) {
      conf +=1;
      if ($('.col5').eq(i + 2).css('background-color') == 'rgb(0, 0, 255)'  ) {
        conf +=1;
        if ($('.col5').eq(i + 3).css('background-color') == 'rgb(0, 0, 255)'  ) {
          conf +=1;
          if (conf == 4 ) {
            if(!alert("O jogador "+p1+" ganhou!")){window.location.reload();}
        }
      }
    }
  }
}

}
var conf = 0;
for (var i = 0; i <= 4; i++) {
  if ($('.col6').eq(i).css('background-color') == 'rgb(0, 0, 255)'  ) {
    conf +=1;
    if ($('.col6').eq(i +1).css('background-color') == 'rgb(0, 0, 255)'  ) {
      conf +=1;
      if ($('.col6').eq(i + 2).css('background-color') == 'rgb(0, 0, 255)'  ) {
        conf +=1;
        if ($('.col6').eq(i + 3).css('background-color') == 'rgb(0, 0, 255)'  ) {
          conf +=1;
          if (conf == 4 ) {
            if(!alert("O jogador "+p1+" ganhou!")){window.location.reload();}
        }
      }
    }
  }
}

}
var conf = 0;
for (var i = 0; i <= 4; i++) {
  if ($('.col7').eq(i).css('background-color') == 'rgb(0, 0, 255)'  ) {
    conf +=1;
    if ($('.col7').eq(i +1).css('background-color') == 'rgb(0, 0, 255)'  ) {
      conf +=1;
      if ($('.col7').eq(i + 2).css('background-color') == 'rgb(0, 0, 255)'  ) {
        conf +=1;
        if ($('.col7').eq(i + 3).css('background-color') == 'rgb(0, 0, 255)'  ) {
          conf +=1;
          if (conf == 4 ) {
            if(!alert("O jogador "+p1+" ganhou!")){window.location.reload();}
        }
      }
    }
  }
}

}
} else {
  for (var i = 0; i <= 4; i++) {
    if ($('.col1').eq(i).css('background-color') == 'rgb(255, 0, 0)'  ) {
      conf +=1;
      if ($('.col1').eq(i +1).css('background-color') == 'rgb(255, 0, 0)'  ) {
        conf +=1;
        if ($('.col1').eq(i + 2).css('background-color') == 'rgb(255, 0, 0)'  ) {
          conf +=1;
          if ($('.col1').eq(i + 3).css('background-color') == 'rgb(255, 0, 0)'  ) {
            conf +=1;
            if (conf == 4 ) {
              if(!alert("O jogador "+p2+" ganhou!")){window.location.reload();}
          }
        }
      }
    }
  }

  }
  var conf = 0;
  for (var i = 0; i <= 4; i++) {
    if ($('.col2').eq(i).css('background-color') == 'rgb(255, 0, 0)'  ) {
      conf +=1;
      if ($('.col2').eq(i +1).css('background-color') == 'rgb(255, 0, 0)'  ) {
        conf +=1;
        if ($('.col2').eq(i + 2).css('background-color') == 'rgb(255, 0, 0)'  ) {
          conf +=1;
          if ($('.col2').eq(i + 3).css('background-color') == 'rgb(255, 0, 0)'  ) {
            conf +=1;
            if (conf == 4 ) {
              if(!alert("O jogador "+p2+" ganhou!")){window.location.reload();}
          }
        }
      }
    }
  }

  }
  var conf = 0;
  for (var i = 0; i <= 4; i++) {
    if ($('.col3').eq(i).css('background-color') == 'rgb(255, 0, 0)'  ) {
      conf +=1;
      if ($('.col3').eq(i +1).css('background-color') == 'rgb(255, 0, 0)'  ) {
        conf +=1;
        if ($('.col3').eq(i + 2).css('background-color') == 'rgb(255, 0, 0)'  ) {
          conf +=1;
          if ($('.col3').eq(i + 3).css('background-color') == 'rgb(255, 0, 0)'  ) {
            conf +=1;
            if (conf == 4 ) {
              if(!alert("O jogador "+p2+" ganhou!")){window.location.reload();}
          }
        }
      }
    }
  }

  }
  var conf = 0;
  for (var i = 0; i <= 4; i++) {
    if ($('.col4').eq(i).css('background-color') == 'rgb(255, 0, 0)'  ) {
      conf +=1;
      if ($('.col4').eq(i +1).css('background-color') == 'rgb(255, 0, 0)'  ) {
        conf +=1;
        if ($('.col4').eq(i + 2).css('background-color') == 'rgb(255, 0, 0)'  ) {
          conf +=1;
          if ($('.col4').eq(i + 3).css('background-color') == 'rgb(255, 0, 0)'  ) {
            conf +=1;
            if (conf == 4 ) {
              if(!alert("O jogador "+p2+" ganhou!")){window.location.reload();}
          }
        }
      }
    }
  }

  }
  var conf = 0;
  for (var i = 0; i <= 4; i++) {
    if ($('.col5').eq(i).css('background-color') == 'rgb(255, 0, 0)'  ) {
      conf +=1;
      if ($('.col5').eq(i +1).css('background-color') == 'rgb(255, 0, 0)'  ) {
        conf +=1;
        if ($('.col5').eq(i + 2).css('background-color') == 'rgb(255, 0, 0)'  ) {
          conf +=1;
          if ($('.col5').eq(i + 3).css('background-color') == 'rgb(255, 0, 0)'  ) {
            conf +=1;
            if (conf == 4 ) {
              if(!alert("O jogador "+p2+" ganhou!")){window.location.reload();}
          }
        }
      }
    }
  }

  }
  var conf = 0;
  for (var i = 0; i <= 4; i++) {
    if ($('.col6').eq(i).css('background-color') == 'rgb(255, 0, 0)'  ) {
      conf +=1;
      if ($('.col6').eq(i +1).css('background-color') == 'rgb(255, 0, 0)'  ) {
        conf +=1;
        if ($('.col6').eq(i + 2).css('background-color') == 'rgb(255, 0, 0)'  ) {
          conf +=1;
          if ($('.col6').eq(i + 3).css('background-color') == 'rgb(255, 0, 0)'  ) {
            conf +=1;
            if (conf == 4 ) {
                if(!alert("O jogador "+p2+" ganhou!")){window.location.reload();}
          }
        }
      }
    }
  }

  }
  var conf = 0;
  for (var i = 0; i <= 4; i++) {
    if ($('.col7').eq(i).css('background-color') == 'rgb(255, 0, 0)'  ) {
      conf +=1;
      if ($('.col7').eq(i +1).css('background-color') == 'rgb(255, 0, 0)'  ) {
        conf +=1;
        if ($('.col7').eq(i + 2).css('background-color') == 'rgb(255, 0, 0)'  ) {
          conf +=1;
          if ($('.col7').eq(i + 3).css('background-color') == 'rgb(255, 0, 0)'  ) {
            conf +=1;
            if (conf == 4 ) {
              if(!alert("O jogador "+p2+" ganhou!")){window.location.reload();}
          }
        }
      }
    }
  }

  }
}
}

// function diagnonalVerification() {
//   var conf = 0;
//   //
//   if ($('.col1').eq(3).css('background-color') == 'rgb(0, 0, 255)'  ) {
//     conf +=1;
//     if ($('.col2').eq(2).css('background-color') == 'rgb(0, 0, 255)'  ) {
//       conf +=1;
//       if ($('.col3').eq(1).css('background-color') == 'rgb(0, 0, 255)'  ) {
//         conf +=1;
//         if ($('.col4').eq(0).css('background-color') == 'rgb(0, 0, 255)'  ) {
//           conf +=1;
//           if (conf == 4 ) {
//             if(!alert("O jogador "+p1+" ganhou!")){window.location.reload();}
//           }
//         }
//       }
//     }
//   }
//   var conf = 0;
//
//   if ($('.col4').eq(5).css('background-color') == 'rgb(0, 0, 255)'  ) {
//     conf +=1;
//     if ($('.col5').eq(4).css('background-color') == 'rgb(0, 0, 255)'  ) {
//       conf +=1;
//       if ($('.col6').eq(3).css('background-color') == 'rgb(0, 0, 255)'  ) {
//         conf +=1;
//         if ($('.col7').eq(2).css('background-color') == 'rgb(0, 0, 255)'  ) {
//           conf +=1;
//           if (conf == 4 ) {
//             if(!alert("O jogador "+p1+" ganhou!")){window.location.reload();}
//           }
//         }
//       }
//     }
//   }
//   var conf = 0;
//
//   if ($('.col1').eq(4).css('background-color') == 'rgb(0, 0, 255)'  ) {
//     conf +=1;
//     if ($('.col2').eq(3).css('background-color') == 'rgb(0, 0, 255)'  ) {
//       conf +=1;
//       if ($('.col3').eq(2).css('background-color') == 'rgb(0, 0, 255)'  ) {
//         conf +=1;
//         if ($('.col4').eq(1).css('background-color') == 'rgb(0, 0, 255)'  ) {
//           conf +=1;
//           if ($('.col5').eq(0).css('background-color') == 'rgb(0, 0, 255)'  ) {
//             conf +=1;
//             if (conf == 5 ) {
//               if(!alert("O jogador "+p1+" ganhou!")){window.location.reload();}
//             }
//           }
//         }
//       }
//     }
//   }
//   var conf = 0;
//
//   if ($('.col3').eq(5).css('background-color') == 'rgb(0, 0, 255)'  ) {
//     conf +=1;
//     if ($('.col4').eq(4).css('background-color') == 'rgb(0, 0, 255)'  ) {
//       conf +=1;
//       if ($('.col5').eq(3).css('background-color') == 'rgb(0, 0, 255)'  ) {
//         conf +=1;
//         if ($('.col6').eq(2).css('background-color') == 'rgb(0, 0, 255)'  ) {
//           conf +=1;
//           if ($('.col7').eq(1).css('background-color') == 'rgb(0, 0, 255)'  ) {
//             conf +=1;
//             if (conf == 5 ) {
//               if(!alert("O jogador "+p1+" ganhou!")){window.location.reload();}
//             }
//           }
//         }
//       }
//     }
//   }
//   var conf = 0;
//
// }

function columncolorChanger() {
  $(".col1").click(function(){
    if (count[0] == -1) {
      button_click = button_click ;
      return
    }
    else {
      buttonClickCounter()
      if (button_click%2 != 0) {
        $('#text2').text(p2+" é a sua vez, escolha uma coluna e jogue.")
        $(".a").eq(count[0]).toggleClass('turnBlue')
        count[0] -= 1;
        }
    else {
        $('#text2').text(p1+" é a sua vez, escolha uma coluna e jogue.")
        $(".a").eq(count[0]).toggleClass('turnRed')
        count[0] -= 1;
        }
    }

  })

  $(".col2").click(function(){
    if (count[1] == -1) {
      button_click = button_click;
      return
    }
    else {
      buttonClickCounter()
      if (button_click%2 != 0) {
        $('#text2').text(p2+" é a sua vez, escolha uma coluna e jogue.")
        $(".b").eq(count[1]).toggleClass('turnBlue')
        count[1] -= 1;
        }
    else {
        $('#text2').text(p1+" é a sua vez, escolha uma coluna e jogue.")
        $(".b").eq(count[1]).toggleClass('turnRed')
        count[1] -= 1;
        }
    }
  })

  $(".col3").click(function(){
    if (count[2] == -1) {
      button_click = button_click;
      return
    }
    else {
      buttonClickCounter()
      if (button_click%2 != 0) {
        $('#text2').text(p2+" é a sua vez, escolha uma coluna e jogue.")
        $(".c").eq(count[2]).toggleClass('turnBlue')
        count[2] -= 1;
        }
    else {
        $('#text2').text(p1+" é a sua vez, escolha uma coluna e jogue.")
        $(".c").eq(count[2]).toggleClass('turnRed')
        count[2] -= 1;
        }
    }

  })

  $(".col4").click(function(){
    if (count[3] == -1) {
      button_click = button_click;
      return
    }
    else {
      buttonClickCounter()
      if (button_click%2 != 0) {
        $('#text2').text(p2+" é a sua vez, escolha uma coluna e jogue.")
        $(".d").eq(count[3]).toggleClass('turnBlue')
        count[3] -= 1;
        }
    else {
        $('#text2').text(p1+" é a sua vez, escolha uma coluna e jogue.")
        $(".d").eq(count[3]).toggleClass('turnRed')
        count[3] -= 1;
        }
    }

  })

  $(".col5").click(function(){
    if (count[4] == -1) {
      button_click = button_click;
      return
    }
    else {
      buttonClickCounter()
      if (button_click%2 != 0) {
        $('#text2').text(p2+" é a sua vez, escolha uma coluna e jogue.")
        $(".e").eq(count[4]).toggleClass('turnBlue')
        count[4] -= 1;
        }
    else {
        $('#text2').text(p1+" é a sua vez, escolha uma coluna e jogue.")
        $(".e").eq(count[4]).toggleClass('turnRed')
        count[4] -= 1;
        }
    }

  })

  $(".col6").click(function(){
    if (count[5] == -1) {
      button_click = button_click;
      return
    }
    else {
      buttonClickCounter()
      if (button_click%2 != 0) {
        $('#text2').text(p2+" é a sua vez, escolha uma coluna e jogue.")
        $(".f").eq(count[5]).toggleClass('turnBlue')
        count[5] -= 1;
        }
    else {
        $('#text2').text(p1+" é a sua vez, escolha uma coluna e jogue.")
        $(".f").eq(count[5]).toggleClass('turnRed')
        count[5] -= 1;
        }
    }

  })

  $(".col7").click(function(){
    if (count[6] == -1) {
      button_click = button_click;
      return
    }
    else {
      buttonClickCounter()
      if (button_click%2 != 0) {
        $('#text2').text(p2+" é a sua vez, escolha uma coluna e jogue.")
        $(".g").eq(count[6]).toggleClass('turnBlue')
        count[6] -= 1;
        }
    else {
        $('#text2').text(p1+" é a sua vez, escolha uma coluna e jogue.")
        $(".g").eq(count[6]).toggleClass('turnRed')
        count[6] -= 1;
        }
    }

  })
}

columncolorChanger()
window.setInterval(horizontalVerification, 100);
window.setInterval(verticalVerification, 100);
