/**
 * BANCO DE DADOS HBA - RATINGS HISTÓRICOS E SAZONAIS
 *
 * Escala: 79 a 95 | Centro da liga: aproximadamente 85
 * 1) overallBase considera estatísticas de todos os tempos, premiações individuais
 *    e feitos do Double-Digit Tracker, com retorno decrescente e correção por amostra.
 * 2) overall aplica campanha da equipe, colocação, fase alcançada e forma individual
 *    determinística para criar auges e temporadas ruins.
 * 3) Elencos dominantes preservam hierarquia: apenas um atleta ocupa o maior overall.
 */

const PERFIS_HISTORICOS_HBA = Object.freeze({
  "!LM": {
    "overallBase": 87,
    "pontuacaoEstatistica": 0.6655,
    "pontuacaoPremiacoes": 16.2,
    "pontuacaoFeitos": 7.0,
    "jogosRegistrados": 23,
    "premiacoes": {
      "HBA Champion": 1,
      "Finals Appearances": 2,
      "MVP Finalist": 2,
      "Breakout Player of the Year": 1,
      "Most Improved Player": 1,
      "All-HBA First Team": 2,
      "All-HBA Total Nominations": 2,
      "HBA All-Defensive Team": 1
    },
    "doubleDigitTracker": {
      "triple": 7,
      "quadruple": 0,
      "quintuple": 0
    }
  },
  "!Lon.doN!": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 1.55,
    "pontuacaoFeitos": 0.0,
    "premiacoes": {
      "HBA Champion": 1,
      "Finals Appearances": 1
    }
  },
  ",cebola": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.323,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0,
    "jogosRegistrados": 1
  },
  ",Fiver": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "-Ipod,Russo": {
    "overallBase": 86,
    "pontuacaoEstatistica": 0.4866,
    "pontuacaoPremiacoes": 20.5,
    "pontuacaoFeitos": 3.0,
    "jogosRegistrados": 64,
    "premiacoes": {
      "HBA Champion": 2,
      "Finals Appearances": 6,
      "MVP Finalist": 1,
      "Breakout Player of the Year": 1,
      "Most Improved Player": 1,
      "All-HBA First Team": 1,
      "All-HBA Second Team": 4,
      "All-HBA Total Nominations": 5,
      "Duo of the Year": 1,
      "4th Man of the Year": 1,
      "Captain of the Year": 1,
      "Rookie of the Year": 1
    },
    "doubleDigitTracker": {
      "triple": 3,
      "quadruple": 0,
      "quintuple": 0
    }
  },
  "-Ipod,Russo.": {
    "overallBase": 86,
    "pontuacaoEstatistica": 0.4866,
    "pontuacaoPremiacoes": 20.5,
    "pontuacaoFeitos": 3.0,
    "jogosRegistrados": 64,
    "premiacoes": {
      "HBA Champion": 2,
      "Finals Appearances": 6,
      "MVP Finalist": 1,
      "Breakout Player of the Year": 1,
      "Most Improved Player": 1,
      "All-HBA First Team": 1,
      "All-HBA Second Team": 4,
      "All-HBA Total Nominations": 5,
      "Duo of the Year": 1,
      "4th Man of the Year": 1,
      "Captain of the Year": 1,
      "Rookie of the Year": 1
    },
    "doubleDigitTracker": {
      "triple": 3,
      "quadruple": 0,
      "quintuple": 0
    }
  },
  "-Katchaum-": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.3518,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0,
    "jogosRegistrados": 2
  },
  "-NatsuDragnnel": {
    "overallBase": 90,
    "pontuacaoEstatistica": 0.7366,
    "pontuacaoPremiacoes": 101.05,
    "pontuacaoFeitos": 14.0,
    "jogosRegistrados": 38,
    "premiacoes": {
      "HBA Champion": 4,
      "Finals Appearances": 7,
      "Finals Most Valuable Player": 1,
      "Most Valuable Player": 4,
      "MVP Finalist": 4,
      "Most Improved Player": 1,
      "Offensive Player of the Year": 4,
      "Defensive Player of the Year": 1,
      "Breakout Player of the Year": 1,
      "All-HBA First Team": 4,
      "All-HBA Second Team": 1,
      "All-HBA Total Nominations": 5,
      "HBA All-Defensive Team": 4,
      "Duo of the Year": 4,
      "Rookie of the Year": 1
    },
    "doubleDigitTracker": {
      "triple": 14,
      "quadruple": 0,
      "quintuple": 0
    }
  },
  "-Sartori": {
    "overallBase": 88,
    "pontuacaoEstatistica": 0.7149,
    "pontuacaoPremiacoes": 41.3,
    "pontuacaoFeitos": 12.0,
    "jogosRegistrados": 58,
    "premiacoes": {
      "HBA Champion": 1,
      "Finals Appearances": 6,
      "Most Valuable Player": 1,
      "MVP Finalist": 2,
      "Defensive Player of the Year": 1,
      "All-HBA First Team": 3,
      "All-HBA Second Team": 2,
      "All-HBA Total Nominations": 5,
      "HBA All-Defensive Team": 4,
      "Duo of the Year": 1,
      "Sportsmanship Award Winner": 3
    },
    "doubleDigitTracker": {
      "triple": 9,
      "quadruple": 1,
      "quintuple": 0
    }
  },
  ".369": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "1804Kevin": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "1804Shawn": {
    "overallBase": 81,
    "pontuacaoEstatistica": 0.6092,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0,
    "jogosRegistrados": 5
  },
  "2pt": {
    "overallBase": 81,
    "pontuacaoEstatistica": 0.3957,
    "pontuacaoPremiacoes": 0.7,
    "pontuacaoFeitos": 0.0,
    "jogosRegistrados": 4,
    "premiacoes": {
      "Finals Appearances": 2
    }
  },
  "5chmitt": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0.35,
    "pontuacaoFeitos": 0.0,
    "premiacoes": {
      "Finals Appearances": 1
    }
  },
  ":.Jessi.": {
    "overallBase": 80,
    "pontuacaoEstatistica": 0.1225,
    "pontuacaoPremiacoes": 1.5,
    "pontuacaoFeitos": 0.0,
    "jogosRegistrados": 6,
    "premiacoes": {
      "Finals Appearances": 2,
      "Rookie of the Year": 1
    }
  },
  ":JaviMartinez": {
    "overallBase": 84,
    "pontuacaoEstatistica": 0.4392,
    "pontuacaoPremiacoes": 6.8,
    "pontuacaoFeitos": 8.0,
    "jogosRegistrados": 50,
    "premiacoes": {
      "HBA Champion": 3,
      "Finals Appearances": 4,
      "Most Improved Player": 1,
      "4th Man of the Year": 1
    },
    "doubleDigitTracker": {
      "triple": 5,
      "quadruple": 1,
      "quintuple": 0
    }
  },
  "@!LM": {
    "overallBase": 87,
    "pontuacaoEstatistica": 0.6655,
    "pontuacaoPremiacoes": 16.2,
    "pontuacaoFeitos": 7.0,
    "jogosRegistrados": 23,
    "premiacoes": {
      "HBA Champion": 1,
      "Finals Appearances": 2,
      "MVP Finalist": 2,
      "Breakout Player of the Year": 1,
      "Most Improved Player": 1,
      "All-HBA First Team": 2,
      "All-HBA Total Nominations": 2,
      "HBA All-Defensive Team": 1
    },
    "doubleDigitTracker": {
      "triple": 7,
      "quadruple": 0,
      "quintuple": 0
    }
  },
  "adidasfit": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.3193,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0,
    "jogosRegistrados": 1
  },
  "AlexBryant": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "Antichrist": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "AntiChrist": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "Aomine": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "Arthur": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "BackpackSway": {
    "overallBase": 81,
    "pontuacaoEstatistica": 0.5619,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 1.0,
    "jogosRegistrados": 10,
    "doubleDigitTracker": {
      "triple": 1,
      "quadruple": 0,
      "quintuple": 0
    }
  },
  "Belliar": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "BIGsantana": {
    "overallBase": 80,
    "pontuacaoEstatistica": 0.2681,
    "pontuacaoPremiacoes": 1.55,
    "pontuacaoFeitos": 0.0,
    "jogosRegistrados": 3,
    "premiacoes": {
      "HBA Champion": 1,
      "Finals Appearances": 1
    }
  },
  "Bojan": {
    "overallBase": 85,
    "pontuacaoEstatistica": 0.6556,
    "pontuacaoPremiacoes": 7.65,
    "pontuacaoFeitos": 6.0,
    "jogosRegistrados": 55,
    "premiacoes": {
      "HBA Champion": 1,
      "Finals Appearances": 1,
      "Most Improved Player": 1,
      "All-HBA Second Team": 3,
      "All-HBA Total Nominations": 3,
      "Rookie of the Year": 1
    },
    "doubleDigitTracker": {
      "triple": 6,
      "quadruple": 0,
      "quintuple": 0
    }
  },
  "brvnks": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "BS.TUGA-BAN": {
    "overallBase": 90,
    "pontuacaoEstatistica": 0.8254,
    "pontuacaoPremiacoes": 48.25,
    "pontuacaoFeitos": 35.0,
    "jogosRegistrados": 46,
    "premiacoes": {
      "HBA Champion": 5,
      "Finals Appearances": 7,
      "Most Valuable Player": 1,
      "MVP Finalist": 3,
      "All-HBA First Team": 4,
      "All-HBA Second Team": 2,
      "All-HBA Total Nominations": 6,
      "HBA All-Defensive Team": 4,
      "Captain of the Year": 2,
      "Sportsmanship Award Winner": 1
    },
    "doubleDigitTracker": {
      "triple": 17,
      "quadruple": 6,
      "quintuple": 0
    }
  },
  "CainzinXIT": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "CiroNeto": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.1124,
    "pontuacaoPremiacoes": 1.15,
    "pontuacaoFeitos": 0.0,
    "jogosRegistrados": 25,
    "premiacoes": {
      "Finals Appearances": 1,
      "Rookie of the Year": 1
    }
  },
  "Cironeto.": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.1124,
    "pontuacaoPremiacoes": 1.15,
    "pontuacaoFeitos": 0.0,
    "jogosRegistrados": 25,
    "premiacoes": {
      "Finals Appearances": 1,
      "Rookie of the Year": 1
    }
  },
  "CiroNeto.": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.1124,
    "pontuacaoPremiacoes": 1.15,
    "pontuacaoFeitos": 0.0,
    "jogosRegistrados": 25,
    "premiacoes": {
      "Finals Appearances": 1,
      "Rookie of the Year": 1
    }
  },
  "Ckr7.": {
    "overallBase": 91,
    "pontuacaoEstatistica": 0.8281,
    "pontuacaoPremiacoes": 115.2,
    "pontuacaoFeitos": 30.0,
    "jogosRegistrados": 83,
    "premiacoes": {
      "HBA Champion": 3,
      "Finals Appearances": 8,
      "Finals Most Valuable Player": 1,
      "MVP Finalist": 7,
      "Offensive Player of the Year": 2,
      "Defensive Player of the Year": 3,
      "All-HBA First Team": 9,
      "All-HBA Second Team": 7,
      "All-HBA Total Nominations": 16,
      "HBA All-Defensive Team": 13,
      "Duo of the Year": 3,
      "Captain of the Year": 1
    },
    "doubleDigitTracker": {
      "triple": 18,
      "quadruple": 4,
      "quintuple": 0
    }
  },
  "Cole": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "Cole.Wolforg": {
    "overallBase": 81,
    "pontuacaoEstatistica": 0.3134,
    "pontuacaoPremiacoes": 0.55,
    "pontuacaoFeitos": 3.0,
    "jogosRegistrados": 12,
    "premiacoes": {
      "Finals Appearances": 1,
      "Sportsmanship Award Winner": 1
    },
    "doubleDigitTracker": {
      "triple": 3,
      "quadruple": 0,
      "quintuple": 0
    }
  },
  "Crossover": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "Crowbirde": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "Dallas": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "Dame": {
    "overallBase": 92,
    "pontuacaoEstatistica": 0.919,
    "pontuacaoPremiacoes": 161.6,
    "pontuacaoFeitos": 69.0,
    "jogosRegistrados": 82,
    "premiacoes": {
      "HBA Champion": 4,
      "Finals Appearances": 12,
      "Finals Most Valuable Player": 2,
      "Most Valuable Player": 5,
      "MVP Finalist": 9,
      "Offensive Player of the Year": 4,
      "All-HBA First Team": 10,
      "All-HBA Second Team": 7,
      "All-HBA Total Nominations": 17,
      "HBA All-Defensive Team": 8,
      "Duo of the Year": 5,
      "Captain of the Year": 5
    },
    "doubleDigitTracker": {
      "triple": 45,
      "quadruple": 8,
      "quintuple": 0
    }
  },
  "DeAndreHopkins_": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.4036,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0,
    "jogosRegistrados": 1
  },
  "Deflect": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "Derian.Berdsain": {
    "overallBase": 81,
    "pontuacaoEstatistica": 0.3938,
    "pontuacaoPremiacoes": 3.1,
    "pontuacaoFeitos": 0.0,
    "jogosRegistrados": 1,
    "premiacoes": {
      "HBA Champion": 2,
      "Finals Appearances": 2
    }
  },
  "DevinBooker": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "diogoiswwe": {
    "overallBase": 91,
    "pontuacaoEstatistica": 0.838,
    "pontuacaoPremiacoes": 120.9,
    "pontuacaoFeitos": 32.0,
    "jogosRegistrados": 85,
    "premiacoes": {
      "HBA Champion": 6,
      "Finals Appearances": 8,
      "Finals Most Valuable Player": 1,
      "Most Valuable Player": 1,
      "MVP Finalist": 4,
      "Defensive Player of the Year": 7,
      "All-HBA First Team": 8,
      "All-HBA Second Team": 5,
      "All-HBA Total Nominations": 13,
      "HBA All-Defensive Team": 11,
      "4th Man of the Year": 1,
      "Duo of the Year": 3,
      "Captain of the Year": 4,
      "Sportsmanship Award Winner": 1
    },
    "doubleDigitTracker": {
      "triple": 20,
      "quadruple": 4,
      "quintuple": 0
    }
  },
  "dududusao": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "Dududusao": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "Durval": {
    "overallBase": 90,
    "pontuacaoEstatistica": 0.8674,
    "pontuacaoPremiacoes": 47.1,
    "pontuacaoFeitos": 41.0,
    "jogosRegistrados": 95,
    "premiacoes": {
      "HBA Champion": 2,
      "Finals Appearances": 6,
      "MVP Finalist": 1,
      "Most Improved Player": 1,
      "All-HBA First Team": 5,
      "All-HBA Second Team": 10,
      "All-HBA Total Nominations": 15,
      "HBA All-Defensive Team": 4,
      "Duo of the Year": 2,
      "Sportsmanship Award Winner": 1
    },
    "doubleDigitTracker": {
      "triple": 29,
      "quadruple": 4,
      "quintuple": 0
    }
  },
  "durval": {
    "overallBase": 90,
    "pontuacaoEstatistica": 0.8674,
    "pontuacaoPremiacoes": 47.1,
    "pontuacaoFeitos": 41.0,
    "jogosRegistrados": 95,
    "premiacoes": {
      "HBA Champion": 2,
      "Finals Appearances": 6,
      "MVP Finalist": 1,
      "Most Improved Player": 1,
      "All-HBA First Team": 5,
      "All-HBA Second Team": 10,
      "All-HBA Total Nominations": 15,
      "HBA All-Defensive Team": 4,
      "Duo of the Year": 2,
      "Sportsmanship Award Winner": 1
    },
    "doubleDigitTracker": {
      "triple": 29,
      "quadruple": 4,
      "quintuple": 0
    }
  },
  "Durvalx": {
    "overallBase": 90,
    "pontuacaoEstatistica": 0.8674,
    "pontuacaoPremiacoes": 47.1,
    "pontuacaoFeitos": 41.0,
    "jogosRegistrados": 95,
    "premiacoes": {
      "HBA Champion": 2,
      "Finals Appearances": 6,
      "MVP Finalist": 1,
      "Most Improved Player": 1,
      "All-HBA First Team": 5,
      "All-HBA Second Team": 10,
      "All-HBA Total Nominations": 15,
      "HBA All-Defensive Team": 4,
      "Duo of the Year": 2,
      "Sportsmanship Award Winner": 1
    },
    "doubleDigitTracker": {
      "triple": 29,
      "quadruple": 4,
      "quintuple": 0
    }
  },
  "durvalx": {
    "overallBase": 90,
    "pontuacaoEstatistica": 0.8674,
    "pontuacaoPremiacoes": 47.1,
    "pontuacaoFeitos": 41.0,
    "jogosRegistrados": 95,
    "premiacoes": {
      "HBA Champion": 2,
      "Finals Appearances": 6,
      "MVP Finalist": 1,
      "Most Improved Player": 1,
      "All-HBA First Team": 5,
      "All-HBA Second Team": 10,
      "All-HBA Total Nominations": 15,
      "HBA All-Defensive Team": 4,
      "Duo of the Year": 2,
      "Sportsmanship Award Winner": 1
    },
    "doubleDigitTracker": {
      "triple": 29,
      "quadruple": 4,
      "quintuple": 0
    }
  },
  "DVP": {
    "overallBase": 86,
    "pontuacaoEstatistica": 0.6571,
    "pontuacaoPremiacoes": 26.8,
    "pontuacaoFeitos": 0.0,
    "jogosRegistrados": 43,
    "premiacoes": {
      "Most Improved Player": 1,
      "All-HBA First Team": 4,
      "All-HBA Second Team": 4,
      "All-HBA Total Nominations": 8,
      "HBA All-Defensive Team": 4
    }
  },
  "DWillis": {
    "overallBase": 82,
    "pontuacaoEstatistica": 0.5368,
    "pontuacaoPremiacoes": 1.7,
    "pontuacaoFeitos": 0.0,
    "jogosRegistrados": 6,
    "premiacoes": {
      "All-HBA Second Team": 1,
      "All-HBA Total Nominations": 1,
      "Sportsmanship Award Winner": 1
    }
  },
  "EfesiosDrummond": {
    "overallBase": 82,
    "pontuacaoEstatistica": 0.287,
    "pontuacaoPremiacoes": 5.25,
    "pontuacaoFeitos": 1.0,
    "jogosRegistrados": 41,
    "premiacoes": {
      "HBA Champion": 2,
      "Finals Appearances": 3,
      "Most Improved Player": 1,
      "4th Man of the Year": 1
    },
    "doubleDigitTracker": {
      "triple": 1,
      "quadruple": 0,
      "quintuple": 0
    }
  },
  "Ekayy": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "EmersonSheik11": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "Enzo.K.Page": {
    "overallBase": 81,
    "pontuacaoEstatistica": 0.3302,
    "pontuacaoPremiacoes": 0.35,
    "pontuacaoFeitos": 3.0,
    "jogosRegistrados": 15,
    "premiacoes": {
      "Finals Appearances": 1
    },
    "doubleDigitTracker": {
      "triple": 3,
      "quadruple": 0,
      "quintuple": 0
    }
  },
  "Epheus": {
    "overallBase": 90,
    "pontuacaoEstatistica": 0.8232,
    "pontuacaoPremiacoes": 79.6,
    "pontuacaoFeitos": 35.0,
    "jogosRegistrados": 76,
    "premiacoes": {
      "HBA Champion": 4,
      "Finals Appearances": 6,
      "Finals Most Valuable Player": 2,
      "MVP Finalist": 1,
      "Defensive Player of the Year": 4,
      "All-HBA Total Nominations": 10,
      "All-HBA First Team": 4,
      "All-HBA Second Team": 6,
      "HBA All-Defensive Team": 10,
      "Duo of the Year": 1,
      "Captain of the Year": 1
    },
    "doubleDigitTracker": {
      "triple": 11,
      "quadruple": 4,
      "quintuple": 1
    }
  },
  "FastMotion": {
    "overallBase": 80,
    "pontuacaoEstatistica": 0.2837,
    "pontuacaoPremiacoes": 0.35,
    "pontuacaoFeitos": 0.0,
    "jogosRegistrados": 7,
    "premiacoes": {
      "Finals Appearances": 1
    }
  },
  "FlavioJuliano": {
    "overallBase": 92,
    "pontuacaoEstatistica": 0.9459,
    "pontuacaoPremiacoes": 157.3,
    "pontuacaoFeitos": 91.0,
    "jogosRegistrados": 95,
    "premiacoes": {
      "HBA Champion": 6,
      "Finals Appearances": 14,
      "Finals Most Valuable Player": 3,
      "Most Valuable Player": 3,
      "MVP Finalist": 7,
      "Offensive Player of the Year": 2,
      "All-HBA First Team": 12,
      "All-HBA Second Team": 7,
      "All-HBA Total Nominations": 19,
      "HBA All-Defensive Team": 13,
      "Duo of the Year": 6,
      "Captain of the Year": 3,
      "Sportsmanship Award Winner": 1
    },
    "doubleDigitTracker": {
      "triple": 55,
      "quadruple": 12,
      "quintuple": 0
    }
  },
  "Genivie": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.2372,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0,
    "jogosRegistrados": 2
  },
  "GFB-Habbo": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0.7,
    "pontuacaoFeitos": 0.0,
    "premiacoes": {
      "Finals Appearances": 2
    }
  },
  "Gianlucca": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "Giannis": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "Griezmann.": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0.35,
    "pontuacaoFeitos": 0.0,
    "premiacoes": {
      "Finals Appearances": 1
    }
  },
  "GUSa147": {
    "overallBase": 81,
    "pontuacaoEstatistica": 0.4113,
    "pontuacaoPremiacoes": 0.35,
    "pontuacaoFeitos": 1.0,
    "jogosRegistrados": 17,
    "premiacoes": {
      "Finals Appearances": 1
    },
    "doubleDigitTracker": {
      "triple": 1,
      "quadruple": 0,
      "quintuple": 0
    }
  },
  "Haitians": {
    "overallBase": 87,
    "pontuacaoEstatistica": 0.7462,
    "pontuacaoPremiacoes": 14.15,
    "pontuacaoFeitos": 13.0,
    "jogosRegistrados": 38,
    "premiacoes": {
      "HBA Champion": 1,
      "Finals Appearances": 1,
      "Finals Most Valuable Player": 1,
      "Breakout Player of the Year": 1,
      "Most Improved Player": 1,
      "All-HBA First Team": 1,
      "All-HBA Second Team": 1,
      "All-HBA Total Nominations": 2,
      "Duo of the Year": 1
    },
    "doubleDigitTracker": {
      "triple": 10,
      "quadruple": 1,
      "quintuple": 0
    }
  },
  "Harry.Hazard": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "hazmitboy": {
    "overallBase": 88,
    "pontuacaoEstatistica": 0.7611,
    "pontuacaoPremiacoes": 27.05,
    "pontuacaoFeitos": 14.0,
    "jogosRegistrados": 52,
    "premiacoes": {
      "HBA Champion": 1,
      "Finals Appearances": 3,
      "Most Valuable Player": 1,
      "MVP Finalist": 1,
      "Most Improved Player": 1,
      "Offensive Player of the Year": 1,
      "Breakout Player of the Year": 1,
      "All-HBA First Team": 2,
      "All-HBA Second Team": 1,
      "All-HBA Total Nominations": 3,
      "Duo of the Year": 1,
      "Rookie of the Year": 1
    },
    "doubleDigitTracker": {
      "triple": 11,
      "quadruple": 1,
      "quintuple": 0
    }
  },
  "hazmitBoy": {
    "overallBase": 88,
    "pontuacaoEstatistica": 0.7611,
    "pontuacaoPremiacoes": 27.05,
    "pontuacaoFeitos": 14.0,
    "jogosRegistrados": 52,
    "premiacoes": {
      "HBA Champion": 1,
      "Finals Appearances": 3,
      "Most Valuable Player": 1,
      "MVP Finalist": 1,
      "Most Improved Player": 1,
      "Offensive Player of the Year": 1,
      "Breakout Player of the Year": 1,
      "All-HBA First Team": 2,
      "All-HBA Second Team": 1,
      "All-HBA Total Nominations": 3,
      "Duo of the Year": 1,
      "Rookie of the Year": 1
    },
    "doubleDigitTracker": {
      "triple": 11,
      "quadruple": 1,
      "quintuple": 0
    }
  },
  "hbateamo": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "hendersonha": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.2059,
    "pontuacaoPremiacoes": 0.2,
    "pontuacaoFeitos": 1.0,
    "jogosRegistrados": 23,
    "premiacoes": {
      "Sportsmanship Award Winner": 1
    },
    "doubleDigitTracker": {
      "triple": 1,
      "quadruple": 0,
      "quintuple": 0
    }
  },
  "hendersonha.": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.2059,
    "pontuacaoPremiacoes": 0.2,
    "pontuacaoFeitos": 1.0,
    "jogosRegistrados": 23,
    "premiacoes": {
      "Sportsmanship Award Winner": 1
    },
    "doubleDigitTracker": {
      "triple": 1,
      "quadruple": 0,
      "quintuple": 0
    }
  },
  "Heron.Colonomou": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "IDontWinGames": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.2928,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0,
    "jogosRegistrados": 2
  },
  "Inaudible": {
    "overallBase": 87,
    "pontuacaoEstatistica": 0.731,
    "pontuacaoPremiacoes": 9.95,
    "pontuacaoFeitos": 27.0,
    "jogosRegistrados": 19,
    "premiacoes": {
      "HBA Champion": 1,
      "Finals Appearances": 1,
      "MVP Finalist": 1,
      "All-HBA First Team": 1,
      "All-HBA Total Nominations": 1,
      "HBA All-Defensive Team": 1,
      "4th Man of the Year": 1
    },
    "doubleDigitTracker": {
      "triple": 12,
      "quadruple": 5,
      "quintuple": 0
    }
  },
  "Ingram": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "Invictous": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "Izumicik": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0.35,
    "pontuacaoFeitos": 0.0,
    "premiacoes": {
      "Finals Appearances": 1
    }
  },
  "jackakka404": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "jackkaka404": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "Jameican": {
    "overallBase": 81,
    "pontuacaoEstatistica": 0.1113,
    "pontuacaoPremiacoes": 3.8,
    "pontuacaoFeitos": 0.0,
    "jogosRegistrados": 13,
    "premiacoes": {
      "HBA Champion": 2,
      "Finals Appearances": 4
    }
  },
  "Jameican.": {
    "overallBase": 81,
    "pontuacaoEstatistica": 0.1113,
    "pontuacaoPremiacoes": 3.8,
    "pontuacaoFeitos": 0.0,
    "jogosRegistrados": 13,
    "premiacoes": {
      "HBA Champion": 2,
      "Finals Appearances": 4
    }
  },
  "James-Harden": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "JamesHarden": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "JaviMartinez": {
    "overallBase": 84,
    "pontuacaoEstatistica": 0.4392,
    "pontuacaoPremiacoes": 6.8,
    "pontuacaoFeitos": 8.0,
    "jogosRegistrados": 50,
    "premiacoes": {
      "HBA Champion": 3,
      "Finals Appearances": 4,
      "Most Improved Player": 1,
      "4th Man of the Year": 1
    },
    "doubleDigitTracker": {
      "triple": 5,
      "quadruple": 1,
      "quintuple": 0
    }
  },
  "jet": {
    "overallBase": 87,
    "pontuacaoEstatistica": 0.7226,
    "pontuacaoPremiacoes": 14.2,
    "pontuacaoFeitos": 17.0,
    "jogosRegistrados": 48,
    "premiacoes": {
      "HBA Champion": 3,
      "Finals Appearances": 4,
      "All-HBA First Team": 1,
      "All-HBA Second Team": 2,
      "All-HBA Total Nominations": 3,
      "HBA All-Defensive Team": 1,
      "4th Man of the Year": 1,
      "Sportsmanship Award Winner": 1
    },
    "doubleDigitTracker": {
      "triple": 8,
      "quadruple": 3,
      "quintuple": 0
    }
  },
  "jet_": {
    "overallBase": 87,
    "pontuacaoEstatistica": 0.7226,
    "pontuacaoPremiacoes": 14.2,
    "pontuacaoFeitos": 17.0,
    "jogosRegistrados": 48,
    "premiacoes": {
      "HBA Champion": 3,
      "Finals Appearances": 4,
      "All-HBA First Team": 1,
      "All-HBA Second Team": 2,
      "All-HBA Total Nominations": 3,
      "HBA All-Defensive Team": 1,
      "4th Man of the Year": 1,
      "Sportsmanship Award Winner": 1
    },
    "doubleDigitTracker": {
      "triple": 8,
      "quadruple": 3,
      "quintuple": 0
    }
  },
  "Jhon.Cole": {
    "overallBase": 87,
    "pontuacaoEstatistica": 0.5315,
    "pontuacaoPremiacoes": 27.3,
    "pontuacaoFeitos": 10.0,
    "jogosRegistrados": 64,
    "premiacoes": {
      "HBA Champion": 1,
      "Finals Appearances": 4,
      "MVP Finalist": 1,
      "Most Improved Player": 1,
      "Defensive Player of the Year": 1,
      "All-HBA First Team": 2,
      "All-HBA Second Team": 2,
      "All-HBA Total Nominations": 4,
      "HBA All-Defensive Team": 3,
      "4th Man of the Year": 1,
      "Captain of the Year": 1,
      "Rookie of the Year": 1
    },
    "doubleDigitTracker": {
      "triple": 7,
      "quadruple": 1,
      "quintuple": 0
    }
  },
  "Joao.Miguel": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "joaotomiya": {
    "overallBase": 84,
    "pontuacaoEstatistica": 0.3211,
    "pontuacaoPremiacoes": 12.6,
    "pontuacaoFeitos": 1.0,
    "jogosRegistrados": 42,
    "premiacoes": {
      "HBA Champion": 2,
      "Finals Appearances": 6,
      "Most Improved Player": 1,
      "All-HBA Second Team": 1,
      "All-HBA Total Nominations": 1,
      "4th Man of the Year": 5,
      "Rookie of the Year": 1
    },
    "doubleDigitTracker": {
      "triple": 1,
      "quadruple": 0,
      "quintuple": 0
    }
  },
  "Jordan.Alonzo": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "Joshua.Rayburn": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "Jrue": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "KALASHINIKOV7": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "Keome": {
    "overallBase": 89,
    "pontuacaoEstatistica": 0.7572,
    "pontuacaoPremiacoes": 58.7,
    "pontuacaoFeitos": 8.0,
    "jogosRegistrados": 41,
    "premiacoes": {
      "HBA Champion": 2,
      "Finals Appearances": 4,
      "Finals Most Valuable Player": 1,
      "Most Valuable Player": 1,
      "MVP Finalist": 3,
      "Defensive Player of the Year": 1,
      "All-HBA First Team": 3,
      "All-HBA Second Team": 5,
      "All-HBA Total Nominations": 8,
      "HBA All-Defensive Team": 6,
      "Duo of the Year": 2
    },
    "doubleDigitTracker": {
      "triple": 8,
      "quadruple": 0,
      "quintuple": 0
    }
  },
  "KingHandles": {
    "overallBase": 80,
    "pontuacaoEstatistica": 0.4355,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0,
    "jogosRegistrados": 1
  },
  "Kirin": {
    "overallBase": 85,
    "pontuacaoEstatistica": 0.5924,
    "pontuacaoPremiacoes": 7.1,
    "pontuacaoFeitos": 1.0,
    "jogosRegistrados": 59,
    "premiacoes": {
      "HBA Champion": 1,
      "Finals Appearances": 2,
      "Most Improved Player": 1,
      "All-HBA Second Team": 2,
      "All-HBA Total Nominations": 2,
      "Duo of the Year": 1,
      "Rookie of the Year": 1
    },
    "doubleDigitTracker": {
      "triple": 1,
      "quadruple": 0,
      "quintuple": 0
    }
  },
  "Klaus.Ramlow": {
    "overallBase": 84,
    "pontuacaoEstatistica": 0.6211,
    "pontuacaoPremiacoes": 2.45,
    "pontuacaoFeitos": 5.0,
    "jogosRegistrados": 30,
    "premiacoes": {
      "HBA Champion": 1,
      "Finals Appearances": 3,
      "Sportsmanship Award Winner": 1
    },
    "doubleDigitTracker": {
      "triple": 5,
      "quadruple": 0,
      "quintuple": 0
    }
  },
  "Klay": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "Kowlz": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "Kyrie": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "lDeco10": {
    "overallBase": 90,
    "pontuacaoEstatistica": 0.7768,
    "pontuacaoPremiacoes": 83.9,
    "pontuacaoFeitos": 10.0,
    "jogosRegistrados": 58,
    "premiacoes": {
      "HBA Champion": 4,
      "Finals Appearances": 6,
      "Most Valuable Player": 1,
      "Finals Most Valuable Player": 3,
      "MVP Finalist": 2,
      "Most Improved Player": 1,
      "Offensive Player of the Year": 2,
      "Defensive Player of the Year": 1,
      "All-HBA First Team": 6,
      "All-HBA Second Team": 4,
      "All-HBA Total Nominations": 10,
      "HBA All-Defensive Team": 4,
      "Duo of the Year": 1,
      "Rookie of the Year": 1
    },
    "doubleDigitTracker": {
      "triple": 10,
      "quadruple": 0,
      "quintuple": 0
    }
  },
  "lDinho.": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 1.55,
    "pontuacaoFeitos": 0.0,
    "premiacoes": {
      "HBA Champion": 1,
      "Finals Appearances": 1
    }
  },
  "Leopardo": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "lFanatic.9": {
    "overallBase": 88,
    "pontuacaoEstatistica": 0.7685,
    "pontuacaoPremiacoes": 26.15,
    "pontuacaoFeitos": 26.0,
    "jogosRegistrados": 70,
    "premiacoes": {
      "HBA Champion": 3,
      "Finals Appearances": 5,
      "Most Improved Player": 1,
      "All-HBA First Team": 2,
      "All-HBA Second Team": 3,
      "All-HBA Total Nominations": 5,
      "HBA All-Defensive Team": 3,
      "Duo of the Year": 1,
      "4th Man of the Year": 2,
      "Captain of the Year": 1,
      "Sportsmanship Award Winner": 1
    },
    "doubleDigitTracker": {
      "triple": 17,
      "quadruple": 3,
      "quintuple": 0
    }
  },
  "lGansito.": {
    "overallBase": 80,
    "pontuacaoEstatistica": 0.106,
    "pontuacaoPremiacoes": 3.45,
    "pontuacaoFeitos": 0.0,
    "jogosRegistrados": 16,
    "premiacoes": {
      "HBA Champion": 2,
      "Finals Appearances": 3
    }
  },
  "Liemar": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "Lillard": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "Linetop15": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0.35,
    "pontuacaoFeitos": 0.0,
    "premiacoes": {
      "Finals Appearances": 1
    }
  },
  "lJpadidas": {
    "overallBase": 80,
    "pontuacaoEstatistica": 0.4085,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0,
    "jogosRegistrados": 5
  },
  "LM!": {
    "overallBase": 87,
    "pontuacaoEstatistica": 0.6655,
    "pontuacaoPremiacoes": 16.2,
    "pontuacaoFeitos": 7.0,
    "jogosRegistrados": 23,
    "premiacoes": {
      "HBA Champion": 1,
      "Finals Appearances": 2,
      "MVP Finalist": 2,
      "Breakout Player of the Year": 1,
      "Most Improved Player": 1,
      "All-HBA First Team": 2,
      "All-HBA Total Nominations": 2,
      "HBA All-Defensive Team": 1
    },
    "doubleDigitTracker": {
      "triple": 7,
      "quadruple": 0,
      "quintuple": 0
    }
  },
  "LoKsMaT4DoR": {
    "overallBase": 81,
    "pontuacaoEstatistica": 0.3028,
    "pontuacaoPremiacoes": 3.1,
    "pontuacaoFeitos": 0.0,
    "jogosRegistrados": 1,
    "premiacoes": {
      "HBA Champion": 2,
      "Finals Appearances": 2
    }
  },
  "lTrans": {
    "overallBase": 87,
    "pontuacaoEstatistica": 0.5737,
    "pontuacaoPremiacoes": 50.9,
    "pontuacaoFeitos": 4.0,
    "jogosRegistrados": 62,
    "premiacoes": {
      "HBA Champion": 7,
      "Finals Appearances": 10,
      "Finals Most Valuable Player": 2,
      "MVP Finalist": 1,
      "All-HBA First Team": 5,
      "All-HBA Second Team": 3,
      "All-HBA Total Nominations": 8,
      "HBA All-Defensive Team": 1,
      "Duo of the Year": 2,
      "4th Man of the Year": 1,
      "Captain of the Year": 1,
      "Sportsmanship Award Winner": 1
    },
    "doubleDigitTracker": {
      "triple": 4,
      "quadruple": 0,
      "quintuple": 0
    }
  },
  "MarceloShultz": {
    "overallBase": 81,
    "pontuacaoEstatistica": 0.4501,
    "pontuacaoPremiacoes": 0.8,
    "pontuacaoFeitos": 0.0,
    "jogosRegistrados": 3,
    "premiacoes": {
      "Rookie of the Year": 1
    }
  },
  "MarkManacher": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "MateuSwanton": {
    "overallBase": 81,
    "pontuacaoEstatistica": 0.2814,
    "pontuacaoPremiacoes": 2.25,
    "pontuacaoFeitos": 0.0,
    "jogosRegistrados": 10,
    "premiacoes": {
      "HBA Champion": 1,
      "Finals Appearances": 3
    }
  },
  "MCDiscoqueijos": {
    "overallBase": 81,
    "pontuacaoEstatistica": 0.2283,
    "pontuacaoPremiacoes": 3.1,
    "pontuacaoFeitos": 0.0,
    "jogosRegistrados": 3,
    "premiacoes": {
      "HBA Champion": 2,
      "Finals Appearances": 2
    }
  },
  "micaSPLASH": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "MID": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "mikadunker": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "Mike.Barton": {
    "overallBase": 80,
    "pontuacaoEstatistica": 0.1762,
    "pontuacaoPremiacoes": 1.75,
    "pontuacaoFeitos": 0.0,
    "jogosRegistrados": 17,
    "premiacoes": {
      "HBA Champion": 1,
      "Finals Appearances": 1,
      "Sportsmanship Award Winner": 1
    }
  },
  "mikedunker": {
    "overallBase": 85,
    "pontuacaoEstatistica": 0.4877,
    "pontuacaoPremiacoes": 9.5,
    "pontuacaoFeitos": 10.0,
    "jogosRegistrados": 27,
    "premiacoes": {
      "HBA Champion": 3,
      "Finals Appearances": 6,
      "All-HBA Second Team": 2,
      "All-HBA Total Nominations": 2,
      "Rookie of the Year": 1
    },
    "doubleDigitTracker": {
      "triple": 7,
      "quadruple": 1,
      "quintuple": 0
    }
  },
  "mutucka": {
    "overallBase": 81,
    "pontuacaoEstatistica": 0.1211,
    "pontuacaoPremiacoes": 3.4,
    "pontuacaoFeitos": 0.0,
    "jogosRegistrados": 23,
    "premiacoes": {
      "HBA Champion": 1,
      "Finals Appearances": 4,
      "Rookie of the Year": 1
    }
  },
  "Mutucka": {
    "overallBase": 81,
    "pontuacaoEstatistica": 0.1211,
    "pontuacaoPremiacoes": 3.4,
    "pontuacaoFeitos": 0.0,
    "jogosRegistrados": 23,
    "premiacoes": {
      "HBA Champion": 1,
      "Finals Appearances": 4,
      "Rookie of the Year": 1
    }
  },
  "NatsuDragnnel": {
    "overallBase": 90,
    "pontuacaoEstatistica": 0.7366,
    "pontuacaoPremiacoes": 101.05,
    "pontuacaoFeitos": 14.0,
    "jogosRegistrados": 38,
    "premiacoes": {
      "HBA Champion": 4,
      "Finals Appearances": 7,
      "Finals Most Valuable Player": 1,
      "Most Valuable Player": 4,
      "MVP Finalist": 4,
      "Most Improved Player": 1,
      "Offensive Player of the Year": 4,
      "Defensive Player of the Year": 1,
      "Breakout Player of the Year": 1,
      "All-HBA First Team": 4,
      "All-HBA Second Team": 1,
      "All-HBA Total Nominations": 5,
      "HBA All-Defensive Team": 4,
      "Duo of the Year": 4,
      "Rookie of the Year": 1
    },
    "doubleDigitTracker": {
      "triple": 14,
      "quadruple": 0,
      "quintuple": 0
    }
  },
  "Ozz=": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.2798,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0,
    "jogosRegistrados": 1
  },
  "packgang": {
    "overallBase": 81,
    "pontuacaoEstatistica": 0.3057,
    "pontuacaoPremiacoes": 1.35,
    "pontuacaoFeitos": 1.0,
    "jogosRegistrados": 9,
    "premiacoes": {
      "Finals Appearances": 1,
      "Most Improved Player": 1,
      "Sportsmanship Award Winner": 1
    },
    "doubleDigitTracker": {
      "triple": 1,
      "quadruple": 0,
      "quintuple": 0
    }
  },
  "Pashuko": {
    "overallBase": 83,
    "pontuacaoEstatistica": 0.5321,
    "pontuacaoPremiacoes": 2.7,
    "pontuacaoFeitos": 0.0,
    "jogosRegistrados": 40,
    "premiacoes": {
      "HBA Champion": 1,
      "Finals Appearances": 2,
      "Most Improved Player": 1
    }
  },
  "Pebito": {
    "overallBase": 81,
    "pontuacaoEstatistica": 0.3395,
    "pontuacaoPremiacoes": 1.55,
    "pontuacaoFeitos": 0.0,
    "jogosRegistrados": 3,
    "premiacoes": {
      "HBA Champion": 1,
      "Finals Appearances": 1
    }
  },
  "Pedro": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "Pedro...Ban": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.319,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0,
    "jogosRegistrados": 1
  },
  "Persea": {
    "overallBase": 86,
    "pontuacaoEstatistica": 0.5903,
    "pontuacaoPremiacoes": 23.0,
    "pontuacaoFeitos": 1.0,
    "jogosRegistrados": 17,
    "premiacoes": {
      "HBA Champion": 4,
      "Finals Appearances": 6,
      "MVP Finalist": 1,
      "All-HBA First Team": 2,
      "All-HBA Second Team": 1,
      "All-HBA Total Nominations": 3,
      "HBA All-Defensive Team": 2,
      "Duo of the Year": 2,
      "4th Man of the Year": 1
    },
    "doubleDigitTracker": {
      "triple": 1,
      "quadruple": 0,
      "quintuple": 0
    }
  },
  "Phillips.Russel": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 1.55,
    "pontuacaoFeitos": 0.0,
    "premiacoes": {
      "HBA Champion": 1,
      "Finals Appearances": 1
    }
  },
  "Physo": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 2.0,
    "doubleDigitTracker": {
      "triple": 2,
      "quadruple": 0,
      "quintuple": 0
    }
  },
  "pinguimfrito!": {
    "overallBase": 91,
    "pontuacaoEstatistica": 0.8626,
    "pontuacaoPremiacoes": 98.0,
    "pontuacaoFeitos": 17.0,
    "jogosRegistrados": 69,
    "premiacoes": {
      "HBA Champion": 5,
      "Finals Appearances": 12,
      "Finals Most Valuable Player": 2,
      "Most Valuable Player": 1,
      "MVP Finalist": 5,
      "Defensive Player of the Year": 2,
      "All-HBA First Team": 7,
      "All-HBA Second Team": 7,
      "All-HBA Total Nominations": 14,
      "HBA All-Defensive Team": 7,
      "Duo of the Year": 1,
      "4th Man of the Year": 1,
      "Captain of the Year": 1
    },
    "doubleDigitTracker": {
      "triple": 11,
      "quadruple": 2,
      "quintuple": 0
    }
  },
  "Piozzi": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "Pixelzinho.": {
    "overallBase": 83,
    "pontuacaoEstatistica": 0.2432,
    "pontuacaoPremiacoes": 13.3,
    "pontuacaoFeitos": 1.0,
    "jogosRegistrados": 25,
    "premiacoes": {
      "HBA Champion": 2,
      "Finals Appearances": 4,
      "MVP Finalist": 1,
      "Most Improved Player": 2,
      "All-HBA First Team": 1,
      "All-HBA Second Team": 1,
      "All-HBA Total Nominations": 2,
      "4th Man of the Year": 1
    },
    "doubleDigitTracker": {
      "triple": 1,
      "quadruple": 0,
      "quintuple": 0
    }
  },
  "Podd": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "rbateamo": {
    "overallBase": 85,
    "pontuacaoEstatistica": 0.6202,
    "pontuacaoPremiacoes": 9.7,
    "pontuacaoFeitos": 3.0,
    "jogosRegistrados": 47,
    "premiacoes": {
      "HBA Champion": 2,
      "Finals Appearances": 4,
      "Most Improved Player": 1,
      "All-HBA Second Team": 3,
      "All-HBA Total Nominations": 3,
      "Duo of the Year": 1
    },
    "doubleDigitTracker": {
      "triple": 3,
      "quadruple": 0,
      "quintuple": 0
    }
  },
  "Retoll": {
    "overallBase": 85,
    "pontuacaoEstatistica": 0.6905,
    "pontuacaoPremiacoes": 3.2,
    "pontuacaoFeitos": 19.0,
    "jogosRegistrados": 27,
    "premiacoes": {
      "All-HBA Second Team": 2,
      "All-HBA Total Nominations": 2,
      "Sportsmanship Award Winner": 1
    },
    "doubleDigitTracker": {
      "triple": 13,
      "quadruple": 2,
      "quintuple": 0
    }
  },
  "RichExtreme": {
    "overallBase": 80,
    "pontuacaoEstatistica": 0.4068,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 1.0,
    "jogosRegistrados": 6,
    "doubleDigitTracker": {
      "triple": 1,
      "quadruple": 0,
      "quintuple": 0
    }
  },
  "Rock": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "Sandroow": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "Sartori": {
    "overallBase": 88,
    "pontuacaoEstatistica": 0.7149,
    "pontuacaoPremiacoes": 41.3,
    "pontuacaoFeitos": 12.0,
    "jogosRegistrados": 58,
    "premiacoes": {
      "HBA Champion": 1,
      "Finals Appearances": 6,
      "Most Valuable Player": 1,
      "MVP Finalist": 2,
      "Defensive Player of the Year": 1,
      "All-HBA First Team": 3,
      "All-HBA Second Team": 2,
      "All-HBA Total Nominations": 5,
      "HBA All-Defensive Team": 4,
      "Duo of the Year": 1,
      "Sportsmanship Award Winner": 3
    },
    "doubleDigitTracker": {
      "triple": 9,
      "quadruple": 1,
      "quintuple": 0
    }
  },
  "Saul": {
    "overallBase": 88,
    "pontuacaoEstatistica": 0.732,
    "pontuacaoPremiacoes": 27.8,
    "pontuacaoFeitos": 24.0,
    "jogosRegistrados": 67,
    "premiacoes": {
      "HBA Champion": 2,
      "Finals Appearances": 2,
      "Finals Most Valuable Player": 1,
      "MVP Finalist": 1,
      "Defensive Player of the Year": 1,
      "All-HBA First Team": 2,
      "All-HBA Second Team": 2,
      "All-HBA Total Nominations": 4,
      "HBA All-Defensive Team": 1,
      "Captain of the Year": 1,
      "Sportsmanship Award Winner": 3
    },
    "doubleDigitTracker": {
      "triple": 12,
      "quadruple": 4,
      "quintuple": 0
    }
  },
  "Seth.MacTravish": {
    "overallBase": 80,
    "pontuacaoEstatistica": 0.1518,
    "pontuacaoPremiacoes": 2.35,
    "pontuacaoFeitos": 0.0,
    "jogosRegistrados": 22,
    "premiacoes": {
      "HBA Champion": 1,
      "Finals Appearances": 1,
      "Most Improved Player": 1
    }
  },
  "SethMacTravish": {
    "overallBase": 80,
    "pontuacaoEstatistica": 0.1518,
    "pontuacaoPremiacoes": 2.35,
    "pontuacaoFeitos": 0.0,
    "jogosRegistrados": 22,
    "premiacoes": {
      "HBA Champion": 1,
      "Finals Appearances": 1,
      "Most Improved Player": 1
    }
  },
  "SkolBreates": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "Sou,,Kaio": {
    "overallBase": 84,
    "pontuacaoEstatistica": 0.5986,
    "pontuacaoPremiacoes": 7.5,
    "pontuacaoFeitos": 0.0,
    "jogosRegistrados": 8,
    "premiacoes": {
      "Defensive Player of the Year": 1,
      "All-HBA Second Team": 1,
      "HBA All-Defensive Team": 1
    }
  },
  "SouBojan": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "Spliked": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "Splikek": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "Stepback": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "Stofrey": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 7.0,
    "doubleDigitTracker": {
      "triple": 4,
      "quadruple": 1,
      "quintuple": 0
    }
  },
  "Stvo": {
    "overallBase": 81,
    "pontuacaoEstatistica": 0.5309,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 1.0,
    "jogosRegistrados": 21,
    "doubleDigitTracker": {
      "triple": 1,
      "quadruple": 0,
      "quintuple": 0
    }
  },
  "Swavey": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "taiiler": {
    "overallBase": 80,
    "pontuacaoEstatistica": 0.3014,
    "pontuacaoPremiacoes": 1.55,
    "pontuacaoFeitos": 0.0,
    "jogosRegistrados": 1,
    "premiacoes": {
      "HBA Champion": 1,
      "Finals Appearances": 1
    }
  },
  "Tamroc": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 1.55,
    "pontuacaoFeitos": 0.0,
    "premiacoes": {
      "HBA Champion": 1,
      "Finals Appearances": 1
    }
  },
  "Tawsh": {
    "overallBase": 88,
    "pontuacaoEstatistica": 0.6728,
    "pontuacaoPremiacoes": 93.2,
    "pontuacaoFeitos": 0.0,
    "jogosRegistrados": 74,
    "premiacoes": {
      "HBA Champion": 5,
      "Finals Appearances": 6,
      "Finals Most Valuable Player": 1,
      "Most Valuable Player": 2,
      "MVP Finalist": 5,
      "Offensive Player of the Year": 6,
      "All-HBA First Team": 6,
      "All-HBA Second Team": 5,
      "All-HBA Total Nominations": 11,
      "Duo of the Year": 1,
      "4th Man of the Year": 1
    }
  },
  "Teqedo": {
    "overallBase": 86,
    "pontuacaoEstatistica": 0.6053,
    "pontuacaoPremiacoes": 20.25,
    "pontuacaoFeitos": 6.0,
    "jogosRegistrados": 53,
    "premiacoes": {
      "HBA Champion": 5,
      "Finals Appearances": 7,
      "Most Improved Player": 1,
      "All-HBA First Team": 1,
      "All-HBA Second Team": 2,
      "All-HBA Total Nominations": 3,
      "HBA All-Defensive Team": 1,
      "4th Man of the Year": 3
    },
    "doubleDigitTracker": {
      "triple": 6,
      "quadruple": 0,
      "quintuple": 0
    }
  },
  "Terry.Tyler": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "Thousand.": {
    "overallBase": 82,
    "pontuacaoEstatistica": 0.3922,
    "pontuacaoPremiacoes": 3.1,
    "pontuacaoFeitos": 0.0,
    "jogosRegistrados": 13,
    "premiacoes": {
      "HBA Champion": 2,
      "Finals Appearances": 2
    }
  },
  "Tico012": {
    "overallBase": 86,
    "pontuacaoEstatistica": 0.6505,
    "pontuacaoPremiacoes": 15.45,
    "pontuacaoFeitos": 2.0,
    "jogosRegistrados": 42,
    "premiacoes": {
      "HBA Champion": 2,
      "Finals Appearances": 3,
      "MVP Finalist": 1,
      "Breakout Player of the Year": 1,
      "All-HBA First Team": 1,
      "All-HBA Second Team": 2,
      "All-HBA Total Nominations": 3,
      "HBA All-Defensive Team": 1,
      "Captain of the Year": 1,
      "Sportsmanship Award Winner": 1
    },
    "doubleDigitTracker": {
      "triple": 2,
      "quadruple": 0,
      "quintuple": 0
    }
  },
  "tico012": {
    "overallBase": 86,
    "pontuacaoEstatistica": 0.6505,
    "pontuacaoPremiacoes": 15.45,
    "pontuacaoFeitos": 2.0,
    "jogosRegistrados": 42,
    "premiacoes": {
      "HBA Champion": 2,
      "Finals Appearances": 3,
      "MVP Finalist": 1,
      "Breakout Player of the Year": 1,
      "All-HBA First Team": 1,
      "All-HBA Second Team": 2,
      "All-HBA Total Nominations": 3,
      "HBA All-Defensive Team": 1,
      "Captain of the Year": 1,
      "Sportsmanship Award Winner": 1
    },
    "doubleDigitTracker": {
      "triple": 2,
      "quadruple": 0,
      "quintuple": 0
    }
  },
  "Tommy": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "TrackStarDavid": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.1727,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0,
    "jogosRegistrados": 3
  },
  "Tree,": {
    "overallBase": 89,
    "pontuacaoEstatistica": 0.779,
    "pontuacaoPremiacoes": 56.2,
    "pontuacaoFeitos": 7.0,
    "jogosRegistrados": 25,
    "premiacoes": {
      "HBA Champion": 2,
      "Finals Appearances": 8,
      "Most Valuable Player": 1,
      "MVP Finalist": 4,
      "Offensive Player of the Year": 2,
      "All-HBA First Team": 6,
      "HBA All-Defensive Team": 3,
      "Duo of the Year": 2,
      "Sportsmanship Award Winner": 1
    },
    "doubleDigitTracker": {
      "triple": 4,
      "quadruple": 1,
      "quintuple": 0
    }
  },
  "Tree.": {
    "overallBase": 89,
    "pontuacaoEstatistica": 0.779,
    "pontuacaoPremiacoes": 56.2,
    "pontuacaoFeitos": 7.0,
    "jogosRegistrados": 25,
    "premiacoes": {
      "HBA Champion": 2,
      "Finals Appearances": 8,
      "Most Valuable Player": 1,
      "MVP Finalist": 4,
      "Offensive Player of the Year": 2,
      "All-HBA First Team": 6,
      "HBA All-Defensive Team": 3,
      "Duo of the Year": 2,
      "Sportsmanship Award Winner": 1
    },
    "doubleDigitTracker": {
      "triple": 4,
      "quadruple": 1,
      "quintuple": 0
    }
  },
  "UnderArmours": {
    "overallBase": 82,
    "pontuacaoEstatistica": 0.5799,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 3.0,
    "jogosRegistrados": 13,
    "doubleDigitTracker": {
      "triple": 3,
      "quadruple": 0,
      "quintuple": 0
    }
  },
  "Vini.Campos": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "VloneWarren": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "xBruno-BAN": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 1.55,
    "pontuacaoFeitos": 0.0,
    "premiacoes": {
      "HBA Champion": 1,
      "Finals Appearances": 1
    }
  },
  "xfakeprohab": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "YashiroYT": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "Zat.ban.ban": {
    "overallBase": 81,
    "pontuacaoEstatistica": 0.4306,
    "pontuacaoPremiacoes": 1.9,
    "pontuacaoFeitos": 0.0,
    "jogosRegistrados": 3,
    "premiacoes": {
      "HBA Champion": 1,
      "Finals Appearances": 2
    }
  },
  "Zion": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "zKiirito": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  },
  "Zoi_Pocu": {
    "overallBase": 79,
    "pontuacaoEstatistica": 0.0,
    "pontuacaoPremiacoes": 0,
    "pontuacaoFeitos": 0.0
  }
});

const BANCO_CONSOLIDADO_HBA = [
  {
    "time": "Charlotte Hornets",
    "temporada": "2",
    "conferencia": "East",
    "desempenho": {
      "jogos": 10,
      "vitorias": 9,
      "derrotas": 1,
      "aproveitamento": 0.9,
      "colocacaoConferencia": 1,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "Kowlz",
        "posicao": "PG",
        "overall": 82,
        "overallBase": 79,
        "ajusteTemporada": 3
      },
      {
        "nome": "pinguimfrito!",
        "posicao": "C",
        "overall": 95,
        "overallBase": 91,
        "ajusteTemporada": 4
      },
      {
        "nome": "Ckr7.",
        "posicao": "SF",
        "overall": 93,
        "overallBase": 91,
        "ajusteTemporada": 2
      },
      {
        "nome": "Izumicik",
        "posicao": "SG",
        "overall": 82,
        "overallBase": 79,
        "ajusteTemporada": 3
      },
      {
        "nome": "GFB-Habbo",
        "posicao": "SF",
        "overall": 84,
        "overallBase": 79,
        "ajusteTemporada": 5
      }
    ],
    "ajusteEquipe": 3.8
  },
  {
    "time": "Cleveland Cavaliers",
    "temporada": "2",
    "conferencia": "East",
    "desempenho": {
      "jogos": 10,
      "vitorias": 7,
      "derrotas": 3,
      "aproveitamento": 0.7,
      "colocacaoConferencia": 2,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "BS.TUGA-BAN",
        "posicao": "SF",
        "overall": 93,
        "overallBase": 90,
        "ajusteTemporada": 3
      },
      {
        "nome": "durvalx",
        "posicao": "PG",
        "overall": 92,
        "overallBase": 90,
        "ajusteTemporada": 2
      },
      {
        "nome": "Pixelzinho.",
        "posicao": "SG",
        "overall": 86,
        "overallBase": 83,
        "ajusteTemporada": 3
      },
      {
        "nome": "lFanatic.9",
        "posicao": "PF",
        "overall": 90,
        "overallBase": 88,
        "ajusteTemporada": 2
      },
      {
        "nome": "Jhon.Cole",
        "posicao": "C",
        "overall": 88,
        "overallBase": 87,
        "ajusteTemporada": 1
      },
      {
        "nome": "mutucka",
        "posicao": "SG",
        "overall": 83,
        "overallBase": 81,
        "ajusteTemporada": 2
      }
    ],
    "ajusteEquipe": 1.8
  },
  {
    "time": "Miami Heat",
    "temporada": "2",
    "conferencia": "East",
    "desempenho": {
      "jogos": 10,
      "vitorias": 6,
      "derrotas": 4,
      "aproveitamento": 0.6,
      "colocacaoConferencia": 3,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "Invictous",
        "posicao": "SG",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "Stofrey",
        "posicao": "PF",
        "overall": 81,
        "overallBase": 79,
        "ajusteTemporada": 2
      },
      {
        "nome": "Teqedo",
        "posicao": "PG",
        "overall": 88,
        "overallBase": 86,
        "ajusteTemporada": 2
      },
      {
        "nome": "tico012",
        "posicao": "SF",
        "overall": 86,
        "overallBase": 86,
        "ajusteTemporada": 0
      },
      {
        "nome": "-Katchaum-",
        "posicao": "C",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "GUSa147",
        "posicao": "SG",
        "overall": 81,
        "overallBase": 81,
        "ajusteTemporada": 0
      }
    ],
    "ajusteEquipe": 0.5
  },
  {
    "time": "Philadelphia 76ers",
    "temporada": "2",
    "conferencia": "East",
    "desempenho": {
      "jogos": 10,
      "vitorias": 0,
      "derrotas": 10,
      "aproveitamento": 0,
      "colocacaoConferencia": 4,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "Pebito",
        "posicao": "SG",
        "overall": 79,
        "overallBase": 81,
        "ajusteTemporada": -2
      },
      {
        "nome": "rbateamo",
        "posicao": "PG",
        "overall": 81,
        "overallBase": 85,
        "ajusteTemporada": -4
      },
      {
        "nome": "FlavioJuliano",
        "posicao": "SF",
        "overall": 88,
        "overallBase": 92,
        "ajusteTemporada": -4
      },
      {
        "nome": "lGansito.",
        "posicao": "C",
        "overall": 79,
        "overallBase": 80,
        "ajusteTemporada": -1
      },
      {
        "nome": "Belliar",
        "posicao": "SG",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "FastMotion",
        "posicao": "PF",
        "overall": 79,
        "overallBase": 80,
        "ajusteTemporada": -1
      }
    ],
    "ajusteEquipe": -4.2
  },
  {
    "time": "Houston Rockets",
    "temporada": "2",
    "conferencia": "West",
    "desempenho": {
      "jogos": 10,
      "vitorias": 6,
      "derrotas": 4,
      "aproveitamento": 0.6,
      "colocacaoConferencia": 1,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "jackkaka404",
        "posicao": "PG",
        "overall": 81,
        "overallBase": 79,
        "ajusteTemporada": 2
      },
      {
        "nome": "-Sartori",
        "posicao": "SG",
        "overall": 90,
        "overallBase": 88,
        "ajusteTemporada": 2
      },
      {
        "nome": "diogoiswwe",
        "posicao": "SF",
        "overall": 92,
        "overallBase": 91,
        "ajusteTemporada": 1
      },
      {
        "nome": "MarceloShultz",
        "posicao": "PF",
        "overall": 82,
        "overallBase": 81,
        "ajusteTemporada": 1
      },
      {
        "nome": "lJpadidas",
        "posicao": "C",
        "overall": 81,
        "overallBase": 80,
        "ajusteTemporada": 1
      }
    ],
    "ajusteEquipe": 1.7
  },
  {
    "time": "Portland Trail Blazers",
    "temporada": "2",
    "conferencia": "West",
    "desempenho": {
      "jogos": 10,
      "vitorias": 5,
      "derrotas": 5,
      "aproveitamento": 0.5,
      "colocacaoConferencia": 2,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "hendersonha.",
        "posicao": "SG",
        "overall": 80,
        "overallBase": 79,
        "ajusteTemporada": 1
      },
      {
        "nome": "Sou,,Kaio",
        "posicao": "PG",
        "overall": 84,
        "overallBase": 84,
        "ajusteTemporada": 0
      },
      {
        "nome": "Tree,",
        "posicao": "PF",
        "overall": 89,
        "overallBase": 89,
        "ajusteTemporada": 0
      },
      {
        "nome": "Physo",
        "posicao": "PG",
        "overall": 80,
        "overallBase": 79,
        "ajusteTemporada": 1
      },
      {
        "nome": "lDeco10",
        "posicao": "C",
        "overall": 91,
        "overallBase": 90,
        "ajusteTemporada": 1
      },
      {
        "nome": "Enzo.K.Page",
        "posicao": "SF",
        "overall": 81,
        "overallBase": 81,
        "ajusteTemporada": 0
      }
    ],
    "ajusteEquipe": 0.4
  },
  {
    "time": "Sacramento Kings",
    "temporada": "2",
    "conferencia": "West",
    "desempenho": {
      "jogos": 10,
      "vitorias": 4,
      "derrotas": 6,
      "aproveitamento": 0.4,
      "colocacaoConferencia": 3,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "lTrans",
        "posicao": "SG",
        "overall": 87,
        "overallBase": 87,
        "ajusteTemporada": 0
      },
      {
        "nome": "Persea",
        "posicao": "SF",
        "overall": 85,
        "overallBase": 86,
        "ajusteTemporada": -1
      },
      {
        "nome": "Epheus",
        "posicao": "PF",
        "overall": 90,
        "overallBase": 90,
        "ajusteTemporada": 0
      },
      {
        "nome": "EfesiosDrummond",
        "posicao": "SF",
        "overall": 82,
        "overallBase": 82,
        "ajusteTemporada": 0
      },
      {
        "nome": "!Lon.doN!",
        "posicao": "C",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "MCDiscoqueijos",
        "posicao": "SG",
        "overall": 81,
        "overallBase": 81,
        "ajusteTemporada": 0
      }
    ],
    "ajusteEquipe": -0.9
  },
  {
    "time": "Miami Heat",
    "temporada": "3",
    "conferencia": "East",
    "desempenho": {
      "jogos": 10,
      "vitorias": 5,
      "derrotas": 5,
      "aproveitamento": 0.5,
      "colocacaoConferencia": 1,
      "faseAlcancada": "Campeão"
    },
    "elenco": [
      {
        "nome": "BS.TUGA-BAN",
        "posicao": "SF",
        "overall": 93,
        "overallBase": 90,
        "ajusteTemporada": 3
      },
      {
        "nome": "Persea",
        "posicao": "SF",
        "overall": 91,
        "overallBase": 86,
        "ajusteTemporada": 5
      },
      {
        "nome": "diogoiswwe",
        "posicao": "PG",
        "overall": 95,
        "overallBase": 91,
        "ajusteTemporada": 4
      },
      {
        "nome": "Jameican",
        "posicao": "SG",
        "overall": 84,
        "overallBase": 81,
        "ajusteTemporada": 3
      }
    ],
    "ajusteEquipe": 3.4
  },
  {
    "time": "Toronto Raptors",
    "temporada": "3",
    "conferencia": "East",
    "desempenho": {
      "jogos": 10,
      "vitorias": 4,
      "derrotas": 6,
      "aproveitamento": 0.4,
      "colocacaoConferencia": 2,
      "faseAlcancada": "Final de Conferência"
    },
    "elenco": [
      {
        "nome": "Retoll",
        "posicao": "PG",
        "overall": 84,
        "overallBase": 85,
        "ajusteTemporada": -1
      },
      {
        "nome": "Keome",
        "posicao": "PF",
        "overall": 90,
        "overallBase": 89,
        "ajusteTemporada": 1
      },
      {
        "nome": "EfesiosDrummond",
        "posicao": "SF",
        "overall": 83,
        "overallBase": 82,
        "ajusteTemporada": 1
      },
      {
        "nome": "Jhon.Cole",
        "posicao": "C",
        "overall": 87,
        "overallBase": 87,
        "ajusteTemporada": 0
      },
      {
        "nome": "Lillard",
        "posicao": "PG",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      }
    ],
    "ajusteEquipe": 0.5
  },
  {
    "time": "Atlanta Hawks",
    "temporada": "3",
    "conferencia": "East",
    "desempenho": {
      "jogos": 10,
      "vitorias": 4,
      "derrotas": 6,
      "aproveitamento": 0.4,
      "colocacaoConferencia": 3,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "jackkaka404",
        "posicao": "PF",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "tico012",
        "posicao": "SF",
        "overall": 85,
        "overallBase": 86,
        "ajusteTemporada": -1
      },
      {
        "nome": "Sou,,Kaio",
        "posicao": "PG",
        "overall": 83,
        "overallBase": 84,
        "ajusteTemporada": -1
      },
      {
        "nome": "Pixelzinho.",
        "posicao": "PG",
        "overall": 81,
        "overallBase": 83,
        "ajusteTemporada": -2
      },
      {
        "nome": "Zat.ban.ban",
        "posicao": "SG",
        "overall": 80,
        "overallBase": 81,
        "ajusteTemporada": -1
      }
    ],
    "ajusteEquipe": -0.9
  },
  {
    "time": "Dallas Mavericks",
    "temporada": "3",
    "conferencia": "West",
    "desempenho": {
      "jogos": 10,
      "vitorias": 5,
      "derrotas": 5,
      "aproveitamento": 0.5,
      "colocacaoConferencia": 3,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "durvalx",
        "posicao": "PG",
        "overall": 89,
        "overallBase": 90,
        "ajusteTemporada": -1
      },
      {
        "nome": "rbateamo",
        "posicao": "PF",
        "overall": 84,
        "overallBase": 85,
        "ajusteTemporada": -1
      },
      {
        "nome": "Invictous",
        "posicao": "C",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "Teqedo",
        "posicao": "SF",
        "overall": 85,
        "overallBase": 86,
        "ajusteTemporada": -1
      },
      {
        "nome": "Stvo",
        "posicao": "SG",
        "overall": 81,
        "overallBase": 81,
        "ajusteTemporada": 0
      }
    ],
    "ajusteEquipe": -0.2
  },
  {
    "time": "Los Angeles Clippers",
    "temporada": "3",
    "conferencia": "West",
    "desempenho": {
      "jogos": 10,
      "vitorias": 8,
      "derrotas": 2,
      "aproveitamento": 0.8,
      "colocacaoConferencia": 1,
      "faseAlcancada": "Final de Conferência"
    },
    "elenco": [
      {
        "nome": "FlavioJuliano",
        "posicao": "SF",
        "overall": 95,
        "overallBase": 92,
        "ajusteTemporada": 3
      },
      {
        "nome": "Tommy",
        "posicao": "SF",
        "overall": 83,
        "overallBase": 79,
        "ajusteTemporada": 4
      },
      {
        "nome": "Tree,",
        "posicao": "PF",
        "overall": 93,
        "overallBase": 89,
        "ajusteTemporada": 4
      },
      {
        "nome": "taiiler",
        "posicao": "PF",
        "overall": 84,
        "overallBase": 80,
        "ajusteTemporada": 4
      },
      {
        "nome": "hendersonha.",
        "posicao": "SG",
        "overall": 84,
        "overallBase": 79,
        "ajusteTemporada": 5
      }
    ],
    "ajusteEquipe": 3.9
  },
  {
    "time": "Utah Jazz",
    "temporada": "3",
    "conferencia": "West",
    "desempenho": {
      "jogos": 10,
      "vitorias": 5,
      "derrotas": 5,
      "aproveitamento": 0.5,
      "colocacaoConferencia": 2,
      "faseAlcancada": "Vice-campeão"
    },
    "elenco": [
      {
        "nome": "Kowlz",
        "posicao": "SG",
        "overall": 82,
        "overallBase": 79,
        "ajusteTemporada": 3
      },
      {
        "nome": "pinguimfrito!",
        "posicao": "C",
        "overall": 94,
        "overallBase": 91,
        "ajusteTemporada": 3
      },
      {
        "nome": "Ckr7.",
        "posicao": "SF",
        "overall": 92,
        "overallBase": 91,
        "ajusteTemporada": 1
      },
      {
        "nome": "lTrans",
        "posicao": "PF",
        "overall": 89,
        "overallBase": 87,
        "ajusteTemporada": 2
      },
      {
        "nome": "mutucka",
        "posicao": "PG",
        "overall": 83,
        "overallBase": 81,
        "ajusteTemporada": 2
      }
    ],
    "ajusteEquipe": 1.9
  },
  {
    "time": "Chicago Bulls",
    "temporada": "4",
    "conferencia": "East",
    "desempenho": {
      "jogos": 10,
      "vitorias": 2,
      "derrotas": 8,
      "aproveitamento": 0.2,
      "colocacaoConferencia": 3,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "rbateamo",
        "posicao": "PG",
        "overall": 82,
        "overallBase": 85,
        "ajusteTemporada": -3
      },
      {
        "nome": "EfesiosDrummond",
        "posicao": "SF",
        "overall": 80,
        "overallBase": 82,
        "ajusteTemporada": -2
      },
      {
        "nome": "mutucka",
        "posicao": "PF",
        "overall": 79,
        "overallBase": 81,
        "ajusteTemporada": -2
      },
      {
        "nome": "Griezmann.",
        "posicao": "PG",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "-Sartori",
        "posicao": "SG",
        "overall": 84,
        "overallBase": 88,
        "ajusteTemporada": -4
      },
      {
        "nome": "lGansito.",
        "posicao": "C",
        "overall": 79,
        "overallBase": 80,
        "ajusteTemporada": -1
      }
    ],
    "ajusteEquipe": -2.3
  },
  {
    "time": "Milwaukee Bucks",
    "temporada": "4",
    "conferencia": "East",
    "desempenho": {
      "jogos": 10,
      "vitorias": 8,
      "derrotas": 2,
      "aproveitamento": 0.8,
      "colocacaoConferencia": 1,
      "faseAlcancada": "Vice-campeão"
    },
    "elenco": [
      {
        "nome": "Tommy",
        "posicao": "SF",
        "overall": 82,
        "overallBase": 79,
        "ajusteTemporada": 3
      },
      {
        "nome": "Persea",
        "posicao": "SF",
        "overall": 89,
        "overallBase": 86,
        "ajusteTemporada": 3
      },
      {
        "nome": "Tree,",
        "posicao": "PF",
        "overall": 93,
        "overallBase": 89,
        "ajusteTemporada": 4
      },
      {
        "nome": "BS.TUGA-BAN",
        "posicao": "SF",
        "overall": 95,
        "overallBase": 90,
        "ajusteTemporada": 5
      },
      {
        "nome": ":.Jessi.",
        "posicao": "PG",
        "overall": 84,
        "overallBase": 80,
        "ajusteTemporada": 4
      }
    ],
    "ajusteEquipe": 4.6
  },
  {
    "time": "Washington Wizards",
    "temporada": "4",
    "conferencia": "East",
    "desempenho": {
      "jogos": 10,
      "vitorias": 5,
      "derrotas": 5,
      "aproveitamento": 0.5,
      "colocacaoConferencia": 2,
      "faseAlcancada": "Final de Conferência"
    },
    "elenco": [
      {
        "nome": "lFanatic.9",
        "posicao": "PG",
        "overall": 87,
        "overallBase": 88,
        "ajusteTemporada": -1
      },
      {
        "nome": "Pedro",
        "posicao": "PF",
        "overall": 80,
        "overallBase": 79,
        "ajusteTemporada": 1
      },
      {
        "nome": "Teqedo",
        "posicao": "C",
        "overall": 87,
        "overallBase": 86,
        "ajusteTemporada": 1
      },
      {
        "nome": "Saul",
        "posicao": "PG",
        "overall": 89,
        "overallBase": 88,
        "ajusteTemporada": 1
      },
      {
        "nome": "Sou,,Kaio",
        "posicao": "SF",
        "overall": 86,
        "overallBase": 84,
        "ajusteTemporada": 2
      },
      {
        "nome": "Jameican.",
        "posicao": "SG",
        "overall": 83,
        "overallBase": 81,
        "ajusteTemporada": 2
      }
    ],
    "ajusteEquipe": 1.2
  },
  {
    "time": "Golden State Warriors",
    "temporada": "4",
    "conferencia": "West",
    "desempenho": {
      "jogos": 10,
      "vitorias": 5,
      "derrotas": 5,
      "aproveitamento": 0.5,
      "colocacaoConferencia": 2,
      "faseAlcancada": "Final de Conferência"
    },
    "elenco": [
      {
        "nome": "diogoiswwe",
        "posicao": "PG",
        "overall": 91,
        "overallBase": 91,
        "ajusteTemporada": 0
      },
      {
        "nome": "Tawsh",
        "posicao": "PF",
        "overall": 88,
        "overallBase": 88,
        "ajusteTemporada": 0
      },
      {
        "nome": "Ckr7.",
        "posicao": "SF",
        "overall": 92,
        "overallBase": 91,
        "ajusteTemporada": 1
      },
      {
        "nome": "Pixelzinho.",
        "posicao": "SG",
        "overall": 85,
        "overallBase": 83,
        "ajusteTemporada": 2
      },
      {
        "nome": "jackakka404",
        "posicao": "PG",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "SkolBreates",
        "posicao": "C",
        "overall": 80,
        "overallBase": 79,
        "ajusteTemporada": 1
      }
    ],
    "ajusteEquipe": 1.2
  },
  {
    "time": "Houston Rockets",
    "temporada": "4",
    "conferencia": "West",
    "desempenho": {
      "jogos": 10,
      "vitorias": 6,
      "derrotas": 4,
      "aproveitamento": 0.6,
      "colocacaoConferencia": 1,
      "faseAlcancada": "Campeão"
    },
    "elenco": [
      {
        "nome": "lTrans",
        "posicao": "SG",
        "overall": 91,
        "overallBase": 87,
        "ajusteTemporada": 4
      },
      {
        "nome": "FlavioJuliano",
        "posicao": "SF",
        "overall": 95,
        "overallBase": 92,
        "ajusteTemporada": 3
      },
      {
        "nome": "pinguimfrito!",
        "posicao": "C",
        "overall": 93,
        "overallBase": 91,
        "ajusteTemporada": 2
      },
      {
        "nome": "LoKsMaT4DoR",
        "posicao": "SG",
        "overall": 86,
        "overallBase": 81,
        "ajusteTemporada": 5
      },
      {
        "nome": "taiiler",
        "posicao": "PF",
        "overall": 85,
        "overallBase": 80,
        "ajusteTemporada": 5
      },
      {
        "nome": "durvalx",
        "posicao": "SF",
        "overall": 92,
        "overallBase": 90,
        "ajusteTemporada": 2
      }
    ],
    "ajusteEquipe": 4.1
  },
  {
    "time": "Boston Celtics",
    "temporada": "5",
    "conferencia": "East",
    "desempenho": {
      "jogos": 10,
      "vitorias": 5,
      "derrotas": 5,
      "aproveitamento": 0.5,
      "colocacaoConferencia": 1,
      "faseAlcancada": "Final de Conferência"
    },
    "elenco": [
      {
        "nome": "Tawsh",
        "posicao": "PF",
        "overall": 89,
        "overallBase": 88,
        "ajusteTemporada": 1
      },
      {
        "nome": "Piozzi",
        "posicao": "PG",
        "overall": 80,
        "overallBase": 79,
        "ajusteTemporada": 1
      },
      {
        "nome": "rbateamo",
        "posicao": "SF",
        "overall": 86,
        "overallBase": 85,
        "ajusteTemporada": 1
      },
      {
        "nome": "jackakka404",
        "posicao": "C",
        "overall": 81,
        "overallBase": 79,
        "ajusteTemporada": 2
      },
      {
        "nome": "Izumicik",
        "posicao": "SG",
        "overall": 80,
        "overallBase": 79,
        "ajusteTemporada": 1
      },
      {
        "nome": "Terry.Tyler",
        "posicao": "SG",
        "overall": 80,
        "overallBase": 79,
        "ajusteTemporada": 1
      }
    ],
    "ajusteEquipe": 1.8
  },
  {
    "time": "Cleveland Cavaliers",
    "temporada": "5",
    "conferencia": "East",
    "desempenho": {
      "jogos": 10,
      "vitorias": 5,
      "derrotas": 5,
      "aproveitamento": 0.5,
      "colocacaoConferencia": 3,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "Pedro",
        "posicao": "PF",
        "overall": 80,
        "overallBase": 79,
        "ajusteTemporada": 1
      },
      {
        "nome": "Saul",
        "posicao": "C",
        "overall": 87,
        "overallBase": 88,
        "ajusteTemporada": -1
      },
      {
        "nome": "Ckr7.",
        "posicao": "SF",
        "overall": 91,
        "overallBase": 91,
        "ajusteTemporada": 0
      },
      {
        "nome": "-Sartori",
        "posicao": "SG",
        "overall": 89,
        "overallBase": 88,
        "ajusteTemporada": 1
      },
      {
        "nome": "EfesiosDrummond",
        "posicao": "SF",
        "overall": 81,
        "overallBase": 82,
        "ajusteTemporada": -1
      },
      {
        "nome": "Enzo.K.Page",
        "posicao": "PG",
        "overall": 80,
        "overallBase": 81,
        "ajusteTemporada": -1
      }
    ],
    "ajusteEquipe": -0.2
  },
  {
    "time": "Detroit Pistons",
    "temporada": "5",
    "conferencia": "East",
    "desempenho": {
      "jogos": 10,
      "vitorias": 5,
      "derrotas": 5,
      "aproveitamento": 0.5,
      "colocacaoConferencia": 2,
      "faseAlcancada": "Vice-campeão"
    },
    "elenco": [
      {
        "nome": "pinguimfrito!",
        "posicao": "C",
        "overall": 89,
        "overallBase": 91,
        "ajusteTemporada": -2
      },
      {
        "nome": "Tree,",
        "posicao": "PF",
        "overall": 90,
        "overallBase": 89,
        "ajusteTemporada": 1
      },
      {
        "nome": "durvalx",
        "posicao": "SF",
        "overall": 92,
        "overallBase": 90,
        "ajusteTemporada": 2
      },
      {
        "nome": "Griezmann.",
        "posicao": "SG",
        "overall": 82,
        "overallBase": 79,
        "ajusteTemporada": 3
      },
      {
        "nome": "Linetop15",
        "posicao": "SF",
        "overall": 82,
        "overallBase": 79,
        "ajusteTemporada": 3
      },
      {
        "nome": "Jameican.",
        "posicao": "SG",
        "overall": 83,
        "overallBase": 81,
        "ajusteTemporada": 2
      }
    ],
    "ajusteEquipe": 1.9
  },
  {
    "time": "Golden State Warriors",
    "temporada": "5",
    "conferencia": "West",
    "desempenho": {
      "jogos": 10,
      "vitorias": 5,
      "derrotas": 5,
      "aproveitamento": 0.5,
      "colocacaoConferencia": 2,
      "faseAlcancada": "Final de Conferência"
    },
    "elenco": [
      {
        "nome": "diogoiswwe",
        "posicao": "SG",
        "overall": 92,
        "overallBase": 91,
        "ajusteTemporada": 1
      },
      {
        "nome": "Jhon.Cole",
        "posicao": "C",
        "overall": 88,
        "overallBase": 87,
        "ajusteTemporada": 1
      },
      {
        "nome": "Tommy",
        "posicao": "SF",
        "overall": 81,
        "overallBase": 79,
        "ajusteTemporada": 2
      },
      {
        "nome": "mutucka",
        "posicao": "PG",
        "overall": 82,
        "overallBase": 81,
        "ajusteTemporada": 1
      },
      {
        "nome": "-Ipod,Russo.",
        "posicao": "PF",
        "overall": 87,
        "overallBase": 86,
        "ajusteTemporada": 1
      },
      {
        "nome": "Teqedo",
        "posicao": "SF",
        "overall": 88,
        "overallBase": 86,
        "ajusteTemporada": 2
      },
      {
        "nome": "SethMacTravish",
        "posicao": "PG",
        "overall": 81,
        "overallBase": 80,
        "ajusteTemporada": 1
      }
    ],
    "ajusteEquipe": 1.2
  },
  {
    "time": "Los Angeles Clippers",
    "temporada": "5",
    "conferencia": "West",
    "desempenho": {
      "jogos": 10,
      "vitorias": 4,
      "derrotas": 6,
      "aproveitamento": 0.4,
      "colocacaoConferencia": 3,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "FlavioJuliano",
        "posicao": "SG",
        "overall": 90,
        "overallBase": 92,
        "ajusteTemporada": -2
      },
      {
        "nome": "Persea",
        "posicao": "SF",
        "overall": 85,
        "overallBase": 86,
        "ajusteTemporada": -1
      },
      {
        "nome": "Sou,,Kaio",
        "posicao": "PF",
        "overall": 84,
        "overallBase": 84,
        "ajusteTemporada": 0
      },
      {
        "nome": "Pixelzinho.",
        "posicao": "C",
        "overall": 82,
        "overallBase": 83,
        "ajusteTemporada": -1
      },
      {
        "nome": ":.Jessi.",
        "posicao": "PG",
        "overall": 79,
        "overallBase": 80,
        "ajusteTemporada": -1
      },
      {
        "nome": "lTrans",
        "posicao": "PG",
        "overall": 86,
        "overallBase": 87,
        "ajusteTemporada": -1
      }
    ],
    "ajusteEquipe": -0.9
  },
  {
    "time": "Orlando Magic",
    "temporada": "6",
    "conferencia": "East",
    "desempenho": {
      "jogos": 10,
      "vitorias": 8,
      "derrotas": 2,
      "aproveitamento": 0.8,
      "colocacaoConferencia": 1,
      "faseAlcancada": "Vice-campeão"
    },
    "elenco": [
      {
        "nome": "FlavioJuliano",
        "posicao": "PG",
        "overall": 95,
        "overallBase": 92,
        "ajusteTemporada": 3
      },
      {
        "nome": "Arthur",
        "posicao": "SG",
        "overall": 83,
        "overallBase": 79,
        "ajusteTemporada": 4
      },
      {
        "nome": "diogoiswwe",
        "posicao": "PF",
        "overall": 93,
        "overallBase": 91,
        "ajusteTemporada": 2
      },
      {
        "nome": "-Ipod,Russo.",
        "posicao": "SF",
        "overall": 91,
        "overallBase": 86,
        "ajusteTemporada": 5
      },
      {
        "nome": "Enzo.K.Page",
        "posicao": "PG",
        "overall": 86,
        "overallBase": 81,
        "ajusteTemporada": 5
      },
      {
        "nome": "Jhon.Cole",
        "posicao": "C",
        "overall": 92,
        "overallBase": 87,
        "ajusteTemporada": 5
      },
      {
        "nome": "Klaus.Ramlow",
        "posicao": "SF",
        "overall": 88,
        "overallBase": 84,
        "ajusteTemporada": 4
      }
    ],
    "ajusteEquipe": 4.6
  },
  {
    "time": "Washington Wizards",
    "temporada": "6",
    "conferencia": "East",
    "desempenho": {
      "jogos": 10,
      "vitorias": 0,
      "derrotas": 10,
      "aproveitamento": 0,
      "colocacaoConferencia": 3,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "lFanatic.9",
        "posicao": "PG",
        "overall": 84,
        "overallBase": 88,
        "ajusteTemporada": -4
      },
      {
        "nome": "hendersonha.",
        "posicao": "SG",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "Genivie",
        "posicao": "PF",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": ":.Jessi.",
        "posicao": "SG",
        "overall": 79,
        "overallBase": 80,
        "ajusteTemporada": -1
      },
      {
        "nome": "EfesiosDrummond",
        "posicao": "SF",
        "overall": 80,
        "overallBase": 82,
        "ajusteTemporada": -2
      },
      {
        "nome": "-NatsuDragnnel",
        "posicao": "C",
        "overall": 87,
        "overallBase": 90,
        "ajusteTemporada": -3
      },
      {
        "nome": "lGansito.",
        "posicao": "PG",
        "overall": 79,
        "overallBase": 80,
        "ajusteTemporada": -1
      }
    ],
    "ajusteEquipe": -3.7
  },
  {
    "time": "Denver Nuggets",
    "temporada": "6",
    "conferencia": "West",
    "desempenho": {
      "jogos": 10,
      "vitorias": 8,
      "derrotas": 2,
      "aproveitamento": 0.8,
      "colocacaoConferencia": 1,
      "faseAlcancada": "Final de Conferência"
    },
    "elenco": [
      {
        "nome": "Ckr7.",
        "posicao": "SF",
        "overall": 93,
        "overallBase": 91,
        "ajusteTemporada": 2
      },
      {
        "nome": "Tawsh",
        "posicao": "PF",
        "overall": 91,
        "overallBase": 88,
        "ajusteTemporada": 3
      },
      {
        "nome": "lTrans",
        "posicao": "SG",
        "overall": 91,
        "overallBase": 87,
        "ajusteTemporada": 4
      },
      {
        "nome": "hazmitBoy",
        "posicao": "PF",
        "overall": 92,
        "overallBase": 88,
        "ajusteTemporada": 4
      },
      {
        "nome": "Teqedo",
        "posicao": "PG",
        "overall": 91,
        "overallBase": 86,
        "ajusteTemporada": 5
      },
      {
        "nome": "Ozz=",
        "posicao": "SG",
        "overall": 84,
        "overallBase": 79,
        "ajusteTemporada": 5
      },
      {
        "nome": "lDeco10",
        "posicao": "C",
        "overall": 95,
        "overallBase": 90,
        "ajusteTemporada": 5
      },
      {
        "nome": "Pixelzinho.",
        "posicao": "SF",
        "overall": 87,
        "overallBase": 83,
        "ajusteTemporada": 4
      }
    ],
    "ajusteEquipe": 3.9
  },
  {
    "time": "Los Angeles Lakers",
    "temporada": "6",
    "conferencia": "West",
    "desempenho": {
      "jogos": 10,
      "vitorias": 5,
      "derrotas": 5,
      "aproveitamento": 0.5,
      "colocacaoConferencia": 3,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "Pedro",
        "posicao": "SF",
        "overall": 80,
        "overallBase": 79,
        "ajusteTemporada": 1
      },
      {
        "nome": "pinguimfrito!",
        "posicao": "C",
        "overall": 91,
        "overallBase": 91,
        "ajusteTemporada": 0
      },
      {
        "nome": "durvalx",
        "posicao": "PF",
        "overall": 90,
        "overallBase": 90,
        "ajusteTemporada": 0
      },
      {
        "nome": "Rock",
        "posicao": "SF",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "Jameican",
        "posicao": "SG",
        "overall": 81,
        "overallBase": 81,
        "ajusteTemporada": 0
      },
      {
        "nome": "CiroNeto.",
        "posicao": "PF",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "-Sartori",
        "posicao": "SG",
        "overall": 87,
        "overallBase": 88,
        "ajusteTemporada": -1
      },
      {
        "nome": "Izumicik",
        "posicao": "C",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      }
    ],
    "ajusteEquipe": -0.2
  },
  {
    "time": "San Antonio Spurs",
    "temporada": "6",
    "conferencia": "West",
    "desempenho": {
      "jogos": 10,
      "vitorias": 6,
      "derrotas": 4,
      "aproveitamento": 0.6,
      "colocacaoConferencia": 2,
      "faseAlcancada": "Campeão"
    },
    "elenco": [
      {
        "nome": "Keome",
        "posicao": "PF",
        "overall": 94,
        "overallBase": 89,
        "ajusteTemporada": 5
      },
      {
        "nome": "Persea",
        "posicao": "SF",
        "overall": 88,
        "overallBase": 86,
        "ajusteTemporada": 2
      },
      {
        "nome": "Tree,",
        "posicao": "PF",
        "overall": 92,
        "overallBase": 89,
        "ajusteTemporada": 3
      },
      {
        "nome": "tico012",
        "posicao": "SF",
        "overall": 91,
        "overallBase": 86,
        "ajusteTemporada": 5
      },
      {
        "nome": "Seth.MacTravish",
        "posicao": "SG",
        "overall": 83,
        "overallBase": 80,
        "ajusteTemporada": 3
      },
      {
        "nome": "mutucka",
        "posicao": "PG",
        "overall": 85,
        "overallBase": 81,
        "ajusteTemporada": 4
      },
      {
        "nome": "Mike.Barton",
        "posicao": "PG",
        "overall": 85,
        "overallBase": 80,
        "ajusteTemporada": 5
      }
    ],
    "ajusteEquipe": 3.5
  },
  {
    "time": "Detroit Pistons",
    "temporada": "7",
    "conferencia": "East",
    "desempenho": {
      "jogos": 10,
      "vitorias": 8,
      "derrotas": 2,
      "aproveitamento": 0.8,
      "colocacaoConferencia": 1,
      "faseAlcancada": "Campeão"
    },
    "elenco": [
      {
        "nome": "pinguimfrito!",
        "posicao": "C",
        "overall": 95,
        "overallBase": 91,
        "ajusteTemporada": 4
      },
      {
        "nome": "lTrans",
        "posicao": "SG",
        "overall": 92,
        "overallBase": 87,
        "ajusteTemporada": 5
      },
      {
        "nome": "Teqedo",
        "posicao": "PG",
        "overall": 90,
        "overallBase": 86,
        "ajusteTemporada": 4
      },
      {
        "nome": "Tommy",
        "posicao": "SF",
        "overall": 85,
        "overallBase": 79,
        "ajusteTemporada": 6
      },
      {
        "nome": "Inaudible",
        "posicao": "PG",
        "overall": 92,
        "overallBase": 87,
        "ajusteTemporada": 5
      },
      {
        "nome": "Persea",
        "posicao": "SF",
        "overall": 91,
        "overallBase": 86,
        "ajusteTemporada": 5
      }
    ],
    "ajusteEquipe": 5.0
  },
  {
    "time": "Philadelphia 76ers",
    "temporada": "7",
    "conferencia": "East",
    "desempenho": {
      "jogos": 10,
      "vitorias": 3,
      "derrotas": 7,
      "aproveitamento": 0.3,
      "colocacaoConferencia": 2,
      "faseAlcancada": "Final de Conferência"
    },
    "elenco": [
      {
        "nome": "lFanatic.9",
        "posicao": "PG",
        "overall": 87,
        "overallBase": 88,
        "ajusteTemporada": -1
      },
      {
        "nome": "diogoiswwe",
        "posicao": "SF",
        "overall": 92,
        "overallBase": 91,
        "ajusteTemporada": 1
      },
      {
        "nome": "hazmitBoy",
        "posicao": "PF",
        "overall": 87,
        "overallBase": 88,
        "ajusteTemporada": -1
      },
      {
        "nome": "FastMotion",
        "posicao": "PF",
        "overall": 81,
        "overallBase": 80,
        "ajusteTemporada": 1
      },
      {
        "nome": "Stvo",
        "posicao": "SG",
        "overall": 80,
        "overallBase": 81,
        "ajusteTemporada": -1
      },
      {
        "nome": "lDeco10",
        "posicao": "C",
        "overall": 90,
        "overallBase": 90,
        "ajusteTemporada": 0
      },
      {
        "nome": "Jameican.",
        "posicao": "SG",
        "overall": 80,
        "overallBase": 81,
        "ajusteTemporada": -1
      },
      {
        "nome": "BS.TUGA-BAN",
        "posicao": "SF",
        "overall": 89,
        "overallBase": 90,
        "ajusteTemporada": -1
      }
    ],
    "ajusteEquipe": -0.2
  },
  {
    "time": "Toronto Raptors",
    "temporada": "7",
    "conferencia": "East",
    "desempenho": {
      "jogos": 10,
      "vitorias": 1,
      "derrotas": 9,
      "aproveitamento": 0.1,
      "colocacaoConferencia": 3,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "durvalx",
        "posicao": "PG",
        "overall": 87,
        "overallBase": 90,
        "ajusteTemporada": -3
      },
      {
        "nome": "Rock",
        "posicao": "SF",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "EfesiosDrummond",
        "posicao": "SF",
        "overall": 79,
        "overallBase": 82,
        "ajusteTemporada": -3
      },
      {
        "nome": "Pixelzinho.",
        "posicao": "C",
        "overall": 79,
        "overallBase": 83,
        "ajusteTemporada": -4
      },
      {
        "nome": "lGansito.",
        "posicao": "PF",
        "overall": 79,
        "overallBase": 80,
        "ajusteTemporada": -1
      },
      {
        "nome": "hendersonha.",
        "posicao": "SG",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      }
    ],
    "ajusteEquipe": -3.0
  },
  {
    "time": "Oklahoma City Thunder",
    "temporada": "7",
    "conferencia": "West",
    "desempenho": {
      "jogos": 10,
      "vitorias": 8,
      "derrotas": 2,
      "aproveitamento": 0.8,
      "colocacaoConferencia": 1,
      "faseAlcancada": "Final de Conferência"
    },
    "elenco": [
      {
        "nome": "FlavioJuliano",
        "posicao": "SG",
        "overall": 93,
        "overallBase": 92,
        "ajusteTemporada": 1
      },
      {
        "nome": "Ckr7.",
        "posicao": "SF",
        "overall": 95,
        "overallBase": 91,
        "ajusteTemporada": 4
      },
      {
        "nome": "tico012",
        "posicao": "SF",
        "overall": 90,
        "overallBase": 86,
        "ajusteTemporada": 4
      },
      {
        "nome": "zKiirito",
        "posicao": "PF",
        "overall": 83,
        "overallBase": 79,
        "ajusteTemporada": 4
      },
      {
        "nome": "Klaus.Ramlow",
        "posicao": "C",
        "overall": 88,
        "overallBase": 84,
        "ajusteTemporada": 4
      },
      {
        "nome": "Pashuko",
        "posicao": "SG",
        "overall": 86,
        "overallBase": 83,
        "ajusteTemporada": 3
      },
      {
        "nome": "Ozz=",
        "posicao": "PG",
        "overall": 83,
        "overallBase": 79,
        "ajusteTemporada": 4
      }
    ],
    "ajusteEquipe": 3.9
  },
  {
    "time": "Portland Trail Blazers",
    "temporada": "7",
    "conferencia": "West",
    "desempenho": {
      "jogos": 10,
      "vitorias": 4,
      "derrotas": 6,
      "aproveitamento": 0.4,
      "colocacaoConferencia": 3,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "Jhon.Cole",
        "posicao": "C",
        "overall": 86,
        "overallBase": 87,
        "ajusteTemporada": -1
      },
      {
        "nome": "Pedro",
        "posicao": "SF",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "Saul",
        "posicao": "SG",
        "overall": 88,
        "overallBase": 88,
        "ajusteTemporada": 0
      },
      {
        "nome": "Tawsh",
        "posicao": "PF",
        "overall": 87,
        "overallBase": 88,
        "ajusteTemporada": -1
      },
      {
        "nome": "GUSa147",
        "posicao": "PG",
        "overall": 81,
        "overallBase": 81,
        "ajusteTemporada": 0
      },
      {
        "nome": "Enzo.K.Page",
        "posicao": "SF",
        "overall": 79,
        "overallBase": 81,
        "ajusteTemporada": -2
      },
      {
        "nome": "-Sartori",
        "posicao": "SG",
        "overall": 86,
        "overallBase": 88,
        "ajusteTemporada": -2
      },
      {
        "nome": "Retoll",
        "posicao": "PF",
        "overall": 85,
        "overallBase": 85,
        "ajusteTemporada": 0
      }
    ],
    "ajusteEquipe": -0.9
  },
  {
    "time": "San Antonio Spurs",
    "temporada": "7",
    "conferencia": "West",
    "desempenho": {
      "jogos": 10,
      "vitorias": 6,
      "derrotas": 4,
      "aproveitamento": 0.6,
      "colocacaoConferencia": 2,
      "faseAlcancada": "Vice-campeão"
    },
    "elenco": [
      {
        "nome": "Keome",
        "posicao": "PF",
        "overall": 91,
        "overallBase": 89,
        "ajusteTemporada": 2
      },
      {
        "nome": "Arthur",
        "posicao": "PG",
        "overall": 82,
        "overallBase": 79,
        "ajusteTemporada": 3
      },
      {
        "nome": "Tree,",
        "posicao": "PF",
        "overall": 90,
        "overallBase": 89,
        "ajusteTemporada": 1
      },
      {
        "nome": "mutucka",
        "posicao": "PG",
        "overall": 83,
        "overallBase": 81,
        "ajusteTemporada": 2
      },
      {
        "nome": "-Ipod,Russo.",
        "posicao": "SG",
        "overall": 88,
        "overallBase": 86,
        "ajusteTemporada": 2
      },
      {
        "nome": "-NatsuDragnnel",
        "posicao": "C",
        "overall": 93,
        "overallBase": 90,
        "ajusteTemporada": 3
      },
      {
        "nome": "MateuSwanton",
        "posicao": "SF",
        "overall": 83,
        "overallBase": 81,
        "ajusteTemporada": 2
      },
      {
        "nome": "JaviMartinez",
        "posicao": "SG",
        "overall": 86,
        "overallBase": 84,
        "ajusteTemporada": 2
      }
    ],
    "ajusteEquipe": 2.6
  },
  {
    "time": "Charlotte Hornets",
    "temporada": "8",
    "conferencia": "East",
    "desempenho": {
      "jogos": 10,
      "vitorias": 3,
      "derrotas": 7,
      "aproveitamento": 0.3,
      "colocacaoConferencia": 3,
      "faseAlcancada": "Final de Conferência"
    },
    "elenco": [
      {
        "nome": "lDeco10",
        "posicao": "C",
        "overall": 90,
        "overallBase": 90,
        "ajusteTemporada": 0
      },
      {
        "nome": "zKiirito",
        "posicao": "SG",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "lFanatic.9",
        "posicao": "PG",
        "overall": 88,
        "overallBase": 88,
        "ajusteTemporada": 0
      },
      {
        "nome": "Saul",
        "posicao": "SF",
        "overall": 87,
        "overallBase": 88,
        "ajusteTemporada": -1
      },
      {
        "nome": "Sandroow",
        "posicao": "PG",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "Seth.MacTravish",
        "posicao": "SG",
        "overall": 79,
        "overallBase": 80,
        "ajusteTemporada": -1
      },
      {
        "nome": "Zoi_Pocu",
        "posicao": "SF",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      }
    ],
    "ajusteEquipe": -0.8
  },
  {
    "time": "Detroit Pistons",
    "temporada": "8",
    "conferencia": "East",
    "desempenho": {
      "jogos": 10,
      "vitorias": 9,
      "derrotas": 1,
      "aproveitamento": 0.9,
      "colocacaoConferencia": 1,
      "faseAlcancada": "Campeão"
    },
    "elenco": [
      {
        "nome": "pinguimfrito!",
        "posicao": "C",
        "overall": 93,
        "overallBase": 91,
        "ajusteTemporada": 2
      },
      {
        "nome": "lTrans",
        "posicao": "PG",
        "overall": 92,
        "overallBase": 87,
        "ajusteTemporada": 5
      },
      {
        "nome": "Ckr7.",
        "posicao": "SF",
        "overall": 95,
        "overallBase": 91,
        "ajusteTemporada": 4
      },
      {
        "nome": "Pashuko",
        "posicao": "PF",
        "overall": 89,
        "overallBase": 83,
        "ajusteTemporada": 6
      },
      {
        "nome": "joaotomiya",
        "posicao": "C",
        "overall": 90,
        "overallBase": 84,
        "ajusteTemporada": 6
      },
      {
        "nome": "lDinho.",
        "posicao": "PG",
        "overall": 84,
        "overallBase": 79,
        "ajusteTemporada": 5
      },
      {
        "nome": "MCDiscoqueijos",
        "posicao": "SF",
        "overall": 85,
        "overallBase": 81,
        "ajusteTemporada": 4
      }
    ],
    "ajusteEquipe": 5.0
  },
  {
    "time": "Indiana Pacers",
    "temporada": "8",
    "conferencia": "East",
    "desempenho": {
      "jogos": 10,
      "vitorias": 5,
      "derrotas": 5,
      "aproveitamento": 0.5,
      "colocacaoConferencia": 2,
      "faseAlcancada": "Semifinal de Conferência"
    },
    "elenco": [
      {
        "nome": "hendersonha.",
        "posicao": "SG",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "Enzo.K.Page",
        "posicao": "SF",
        "overall": 83,
        "overallBase": 81,
        "ajusteTemporada": 2
      },
      {
        "nome": "-NatsuDragnnel",
        "posicao": "C",
        "overall": 92,
        "overallBase": 90,
        "ajusteTemporada": 2
      },
      {
        "nome": "GUSa147",
        "posicao": "PG",
        "overall": 82,
        "overallBase": 81,
        "ajusteTemporada": 1
      },
      {
        "nome": "Klaus.Ramlow",
        "posicao": "PG",
        "overall": 84,
        "overallBase": 84,
        "ajusteTemporada": 0
      },
      {
        "nome": "-Ipod,Russo.",
        "posicao": "PF",
        "overall": 88,
        "overallBase": 86,
        "ajusteTemporada": 2
      },
      {
        "nome": "Inaudible",
        "posicao": "SG",
        "overall": 87,
        "overallBase": 87,
        "ajusteTemporada": 0
      }
    ],
    "ajusteEquipe": 0.8
  },
  {
    "time": "Orlando Magic",
    "temporada": "8",
    "conferencia": "East",
    "desempenho": {
      "jogos": 10,
      "vitorias": 3,
      "derrotas": 7,
      "aproveitamento": 0.3,
      "colocacaoConferencia": 4,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "Swavey",
        "posicao": "SF",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "UnderArmours",
        "posicao": "PG",
        "overall": 79,
        "overallBase": 82,
        "ajusteTemporada": -3
      },
      {
        "nome": "packgang",
        "posicao": "C",
        "overall": 79,
        "overallBase": 81,
        "ajusteTemporada": -2
      },
      {
        "nome": "TrackStarDavid",
        "posicao": "SG",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "KingHandles",
        "posicao": "PF",
        "overall": 79,
        "overallBase": 80,
        "ajusteTemporada": -1
      },
      {
        "nome": "DeAndreHopkins_",
        "posicao": "SG",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "adidasfit",
        "posicao": "PG",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      }
    ],
    "ajusteEquipe": -2.1
  },
  {
    "time": "Los Angeles Clippers",
    "temporada": "8",
    "conferencia": "West",
    "desempenho": {
      "jogos": 10,
      "vitorias": 6,
      "derrotas": 4,
      "aproveitamento": 0.6,
      "colocacaoConferencia": 1,
      "faseAlcancada": "Vice-campeão"
    },
    "elenco": [
      {
        "nome": "FlavioJuliano",
        "posicao": "PG",
        "overall": 95,
        "overallBase": 92,
        "ajusteTemporada": 3
      },
      {
        "nome": "Pedro",
        "posicao": "SF",
        "overall": 82,
        "overallBase": 79,
        "ajusteTemporada": 3
      },
      {
        "nome": "-Sartori",
        "posicao": "SG",
        "overall": 91,
        "overallBase": 88,
        "ajusteTemporada": 3
      },
      {
        "nome": "Tree,",
        "posicao": "PF",
        "overall": 92,
        "overallBase": 89,
        "ajusteTemporada": 3
      },
      {
        "nome": "MateuSwanton",
        "posicao": "PG",
        "overall": 83,
        "overallBase": 81,
        "ajusteTemporada": 2
      },
      {
        "nome": "lGansito.",
        "posicao": "SG",
        "overall": 84,
        "overallBase": 80,
        "ajusteTemporada": 4
      }
    ],
    "ajusteEquipe": 3.2
  },
  {
    "time": "Memphis Grizzlies",
    "temporada": "8",
    "conferencia": "West",
    "desempenho": {
      "jogos": 10,
      "vitorias": 5,
      "derrotas": 5,
      "aproveitamento": 0.5,
      "colocacaoConferencia": 3,
      "faseAlcancada": "Final de Conferência"
    },
    "elenco": [
      {
        "nome": "mutucka",
        "posicao": "PF",
        "overall": 81,
        "overallBase": 81,
        "ajusteTemporada": 0
      },
      {
        "nome": "Stvo",
        "posicao": "SG",
        "overall": 81,
        "overallBase": 81,
        "ajusteTemporada": 0
      },
      {
        "nome": "Arthur",
        "posicao": "PG",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "diogoiswwe",
        "posicao": "C",
        "overall": 91,
        "overallBase": 91,
        "ajusteTemporada": 0
      },
      {
        "nome": "tico012",
        "posicao": "SF",
        "overall": 88,
        "overallBase": 86,
        "ajusteTemporada": 2
      },
      {
        "nome": "Ozz=",
        "posicao": "PG",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "BS.TUGA-BAN",
        "posicao": "SF",
        "overall": 92,
        "overallBase": 90,
        "ajusteTemporada": 2
      }
    ],
    "ajusteEquipe": 0.6
  },
  {
    "time": "Phoenix Suns",
    "temporada": "8",
    "conferencia": "West",
    "desempenho": {
      "jogos": 10,
      "vitorias": 4,
      "derrotas": 6,
      "aproveitamento": 0.4,
      "colocacaoConferencia": 4,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "durvalx",
        "posicao": "PG",
        "overall": 88,
        "overallBase": 90,
        "ajusteTemporada": -2
      },
      {
        "nome": "Teqedo",
        "posicao": "PG",
        "overall": 86,
        "overallBase": 86,
        "ajusteTemporada": 0
      },
      {
        "nome": "Rock",
        "posicao": "SF",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "Tawsh",
        "posicao": "PF",
        "overall": 86,
        "overallBase": 88,
        "ajusteTemporada": -2
      },
      {
        "nome": "CiroNeto.",
        "posicao": "PF",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "EfesiosDrummond",
        "posicao": "SF",
        "overall": 82,
        "overallBase": 82,
        "ajusteTemporada": 0
      },
      {
        "nome": "Zat.ban.ban",
        "posicao": "SG",
        "overall": 79,
        "overallBase": 81,
        "ajusteTemporada": -2
      },
      {
        "nome": "jackkaka404",
        "posicao": "SG",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      }
    ],
    "ajusteEquipe": -1.4
  },
  {
    "time": "Brooklyn Nets",
    "temporada": "9",
    "conferencia": "East",
    "desempenho": {
      "jogos": 10,
      "vitorias": 4,
      "derrotas": 6,
      "aproveitamento": 0.4,
      "colocacaoConferencia": 3,
      "faseAlcancada": "Semifinal de Conferência"
    },
    "elenco": [
      {
        "nome": "Cole.Wolforg",
        "posicao": "SF",
        "overall": 82,
        "overallBase": 81,
        "ajusteTemporada": 1
      },
      {
        "nome": "James-Harden",
        "posicao": "PG",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "Lillard",
        "posicao": "C",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "GUSa147",
        "posicao": "PG",
        "overall": 81,
        "overallBase": 81,
        "ajusteTemporada": 0
      },
      {
        "nome": "hendersonha.",
        "posicao": "SG",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      }
    ],
    "ajusteEquipe": -0.5
  },
  {
    "time": "Detroit Pistons",
    "temporada": "9",
    "conferencia": "East",
    "desempenho": {
      "jogos": 10,
      "vitorias": 5,
      "derrotas": 5,
      "aproveitamento": 0.5,
      "colocacaoConferencia": 1,
      "faseAlcancada": "Final de Conferência"
    },
    "elenco": [
      {
        "nome": "pinguimfrito!",
        "posicao": "C",
        "overall": 94,
        "overallBase": 91,
        "ajusteTemporada": 3
      },
      {
        "nome": "Ckr7.",
        "posicao": "SF",
        "overall": 93,
        "overallBase": 91,
        "ajusteTemporada": 2
      },
      {
        "nome": "Pashuko",
        "posicao": "SG",
        "overall": 83,
        "overallBase": 83,
        "ajusteTemporada": 0
      },
      {
        "nome": "Izumicik",
        "posicao": "PG",
        "overall": 81,
        "overallBase": 79,
        "ajusteTemporada": 2
      },
      {
        "nome": "AlexBryant",
        "posicao": "PF",
        "overall": 80,
        "overallBase": 79,
        "ajusteTemporada": 1
      },
      {
        "nome": "Seth.MacTravish",
        "posicao": "SG",
        "overall": 82,
        "overallBase": 80,
        "ajusteTemporada": 2
      },
      {
        "nome": ".369",
        "posicao": "SF",
        "overall": 81,
        "overallBase": 79,
        "ajusteTemporada": 2
      }
    ],
    "ajusteEquipe": 1.8
  },
  {
    "time": "Miami Heat",
    "temporada": "9",
    "conferencia": "East",
    "desempenho": {
      "jogos": 10,
      "vitorias": 5,
      "derrotas": 5,
      "aproveitamento": 0.5,
      "colocacaoConferencia": 2,
      "faseAlcancada": "Vice-campeão"
    },
    "elenco": [
      {
        "nome": "FlavioJuliano",
        "posicao": "PG",
        "overall": 93,
        "overallBase": 92,
        "ajusteTemporada": 1
      },
      {
        "nome": "hazmitBoy",
        "posicao": "PF",
        "overall": 89,
        "overallBase": 88,
        "ajusteTemporada": 1
      },
      {
        "nome": "Jameican.",
        "posicao": "SG",
        "overall": 83,
        "overallBase": 81,
        "ajusteTemporada": 2
      },
      {
        "nome": "FastMotion",
        "posicao": "PF",
        "overall": 81,
        "overallBase": 80,
        "ajusteTemporada": 1
      }
    ],
    "ajusteEquipe": 1.9
  },
  {
    "time": "Washington Wizards",
    "temporada": "9",
    "conferencia": "East",
    "desempenho": {
      "jogos": 10,
      "vitorias": 1,
      "derrotas": 9,
      "aproveitamento": 0.1,
      "colocacaoConferencia": 4,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "-Ipod,Russo.",
        "posicao": "SG",
        "overall": 82,
        "overallBase": 86,
        "ajusteTemporada": -4
      },
      {
        "nome": "SouBojan",
        "posicao": "PG",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "-NatsuDragnnel",
        "posicao": "C",
        "overall": 86,
        "overallBase": 90,
        "ajusteTemporada": -4
      },
      {
        "nome": "Enzo.K.Page",
        "posicao": "PF",
        "overall": 79,
        "overallBase": 81,
        "ajusteTemporada": -2
      },
      {
        "nome": "Thousand.",
        "posicao": "PG",
        "overall": 80,
        "overallBase": 82,
        "ajusteTemporada": -2
      },
      {
        "nome": "rbateamo",
        "posicao": "SF",
        "overall": 81,
        "overallBase": 85,
        "ajusteTemporada": -4
      }
    ],
    "ajusteEquipe": -3.5
  },
  {
    "time": "Golden State Warriors",
    "temporada": "9",
    "conferencia": "West",
    "desempenho": {
      "jogos": 10,
      "vitorias": 8,
      "derrotas": 2,
      "aproveitamento": 0.8,
      "colocacaoConferencia": 1,
      "faseAlcancada": "Campeão"
    },
    "elenco": [
      {
        "nome": "diogoiswwe",
        "posicao": "PG",
        "overall": 95,
        "overallBase": 91,
        "ajusteTemporada": 4
      },
      {
        "nome": "lDeco10",
        "posicao": "C",
        "overall": 93,
        "overallBase": 90,
        "ajusteTemporada": 3
      },
      {
        "nome": "lTrans",
        "posicao": "SG",
        "overall": 92,
        "overallBase": 87,
        "ajusteTemporada": 5
      },
      {
        "nome": "Harry.Hazard",
        "posicao": "SF",
        "overall": 85,
        "overallBase": 79,
        "ajusteTemporada": 6
      },
      {
        "nome": "joaotomiya",
        "posicao": "C",
        "overall": 89,
        "overallBase": 84,
        "ajusteTemporada": 5
      },
      {
        "nome": "micaSPLASH",
        "posicao": "PF",
        "overall": 83,
        "overallBase": 79,
        "ajusteTemporada": 4
      }
    ],
    "ajusteEquipe": 5.0
  },
  {
    "time": "Phoenix Suns",
    "temporada": "9",
    "conferencia": "West",
    "desempenho": {
      "jogos": 10,
      "vitorias": 8,
      "derrotas": 2,
      "aproveitamento": 0.8,
      "colocacaoConferencia": 2,
      "faseAlcancada": "Final de Conferência"
    },
    "elenco": [
      {
        "nome": "Stepback",
        "posicao": "PF",
        "overall": 82,
        "overallBase": 79,
        "ajusteTemporada": 3
      },
      {
        "nome": "-Sartori",
        "posicao": "SG",
        "overall": 91,
        "overallBase": 88,
        "ajusteTemporada": 3
      },
      {
        "nome": "zKiirito",
        "posicao": "PG",
        "overall": 81,
        "overallBase": 79,
        "ajusteTemporada": 2
      },
      {
        "nome": "EfesiosDrummond",
        "posicao": "SF",
        "overall": 85,
        "overallBase": 82,
        "ajusteTemporada": 3
      }
    ],
    "ajusteEquipe": 3.3
  },
  {
    "time": "Vancouver Grizzlies",
    "temporada": "9",
    "conferencia": "West",
    "desempenho": {
      "jogos": 10,
      "vitorias": 3,
      "derrotas": 7,
      "aproveitamento": 0.3,
      "colocacaoConferencia": 4,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "jet_",
        "posicao": "SG",
        "overall": 85,
        "overallBase": 87,
        "ajusteTemporada": -2
      },
      {
        "nome": "Joshua.Rayburn",
        "posicao": "PG",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "durvalx",
        "posicao": "SF",
        "overall": 89,
        "overallBase": 90,
        "ajusteTemporada": -1
      },
      {
        "nome": "Klaus.Ramlow",
        "posicao": "PG",
        "overall": 83,
        "overallBase": 84,
        "ajusteTemporada": -1
      },
      {
        "nome": "MateuSwanton",
        "posicao": "SG",
        "overall": 79,
        "overallBase": 81,
        "ajusteTemporada": -2
      },
      {
        "nome": "taiiler",
        "posicao": "PF",
        "overall": 79,
        "overallBase": 80,
        "ajusteTemporada": -1
      }
    ],
    "ajusteEquipe": -2.1
  },
  {
    "time": "Indiana Pacers",
    "temporada": "10",
    "conferencia": "East",
    "desempenho": {
      "jogos": 7,
      "vitorias": 1,
      "derrotas": 6,
      "aproveitamento": 0.143,
      "colocacaoConferencia": 4,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "Swavey",
        "posicao": "PG",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "BackpackSway",
        "posicao": "SG",
        "overall": 79,
        "overallBase": 81,
        "ajusteTemporada": -2
      },
      {
        "nome": "Retoll",
        "posicao": "PF",
        "overall": 82,
        "overallBase": 85,
        "ajusteTemporada": -3
      },
      {
        "nome": "2pt",
        "posicao": "C",
        "overall": 79,
        "overallBase": 81,
        "ajusteTemporada": -2
      },
      {
        "nome": "DevinBooker",
        "posicao": "PG",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "GUSa147",
        "posicao": "SF",
        "overall": 79,
        "overallBase": 81,
        "ajusteTemporada": -2
      }
    ],
    "ajusteEquipe": -3.2
  },
  {
    "time": "Milwaukee Bucks",
    "temporada": "10",
    "conferencia": "East",
    "desempenho": {
      "jogos": 7,
      "vitorias": 5,
      "derrotas": 2,
      "aproveitamento": 0.714,
      "colocacaoConferencia": 1,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "Giannis",
        "posicao": "PF",
        "overall": 81,
        "overallBase": 79,
        "ajusteTemporada": 2
      },
      {
        "nome": "Durvalx",
        "posicao": "PG",
        "overall": 91,
        "overallBase": 90,
        "ajusteTemporada": 1
      },
      {
        "nome": "Ckr7.",
        "posicao": "SF",
        "overall": 93,
        "overallBase": 91,
        "ajusteTemporada": 2
      },
      {
        "nome": "rbateamo",
        "posicao": "C",
        "overall": 88,
        "overallBase": 85,
        "ajusteTemporada": 3
      },
      {
        "nome": "EfesiosDrummond",
        "posicao": "SF",
        "overall": 85,
        "overallBase": 82,
        "ajusteTemporada": 3
      },
      {
        "nome": "Jameican.",
        "posicao": "SG",
        "overall": 84,
        "overallBase": 81,
        "ajusteTemporada": 3
      }
    ],
    "ajusteEquipe": 2.5
  },
  {
    "time": "New York Knicks",
    "temporada": "10",
    "conferencia": "East",
    "desempenho": {
      "jogos": 7,
      "vitorias": 3,
      "derrotas": 4,
      "aproveitamento": 0.429,
      "colocacaoConferencia": 2,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "lDeco10",
        "posicao": "C",
        "overall": 89,
        "overallBase": 90,
        "ajusteTemporada": -1
      },
      {
        "nome": "-Sartori",
        "posicao": "SG",
        "overall": 87,
        "overallBase": 88,
        "ajusteTemporada": -1
      },
      {
        "nome": "jet_",
        "posicao": "SF",
        "overall": 86,
        "overallBase": 87,
        "ajusteTemporada": -1
      },
      {
        "nome": "Teqedo",
        "posicao": "PF",
        "overall": 87,
        "overallBase": 86,
        "ajusteTemporada": 1
      },
      {
        "nome": "Vini.Campos",
        "posicao": "PG",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "-Ipod,Russo.",
        "posicao": "PG",
        "overall": 87,
        "overallBase": 86,
        "ajusteTemporada": 1
      }
    ],
    "ajusteEquipe": -0.1
  },
  {
    "time": "Toronto Raptors",
    "temporada": "10",
    "conferencia": "East",
    "desempenho": {
      "jogos": 7,
      "vitorias": 2,
      "derrotas": 5,
      "aproveitamento": 0.286,
      "colocacaoConferencia": 3,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "CiroNeto.",
        "posicao": "PF",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "Seth.MacTravish",
        "posicao": "PG",
        "overall": 79,
        "overallBase": 80,
        "ajusteTemporada": -1
      },
      {
        "nome": "Stepback",
        "posicao": "SG",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "Joshua.Rayburn",
        "posicao": "SF",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "Thousand.",
        "posicao": "C",
        "overall": 80,
        "overallBase": 82,
        "ajusteTemporada": -2
      },
      {
        "nome": "Ekayy",
        "posicao": "PG",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      }
    ],
    "ajusteEquipe": -1.7
  },
  {
    "time": "Houston Rockets",
    "temporada": "10",
    "conferencia": "West",
    "desempenho": {
      "jogos": 7,
      "vitorias": 5,
      "derrotas": 2,
      "aproveitamento": 0.714,
      "colocacaoConferencia": 1,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "lTrans",
        "posicao": "SF",
        "overall": 89,
        "overallBase": 87,
        "ajusteTemporada": 2
      },
      {
        "nome": "FlavioJuliano",
        "posicao": "PG",
        "overall": 93,
        "overallBase": 92,
        "ajusteTemporada": 1
      },
      {
        "nome": "pinguimfrito!",
        "posicao": "C",
        "overall": 95,
        "overallBase": 91,
        "ajusteTemporada": 4
      },
      {
        "nome": "joaotomiya",
        "posicao": "C",
        "overall": 86,
        "overallBase": 84,
        "ajusteTemporada": 2
      },
      {
        "nome": "Zat.ban.ban",
        "posicao": "SG",
        "overall": 83,
        "overallBase": 81,
        "ajusteTemporada": 2
      },
      {
        "nome": "Deflect",
        "posicao": "PF",
        "overall": 81,
        "overallBase": 79,
        "ajusteTemporada": 2
      }
    ],
    "ajusteEquipe": 2.5
  },
  {
    "time": "Portland Trail Blazers",
    "temporada": "10",
    "conferencia": "West",
    "desempenho": {
      "jogos": 7,
      "vitorias": 4,
      "derrotas": 3,
      "aproveitamento": 0.571,
      "colocacaoConferencia": 3,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "Lillard",
        "posicao": "SF",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "Mutucka",
        "posicao": "PF",
        "overall": 81,
        "overallBase": 81,
        "ajusteTemporada": 0
      },
      {
        "nome": "1804Shawn",
        "posicao": "PG",
        "overall": 82,
        "overallBase": 81,
        "ajusteTemporada": 1
      },
      {
        "nome": "IDontWinGames",
        "posicao": "C",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "@!LM",
        "posicao": "SG",
        "overall": 88,
        "overallBase": 87,
        "ajusteTemporada": 1
      },
      {
        "nome": "1804Kevin",
        "posicao": "SG",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      }
    ],
    "ajusteEquipe": 0.3
  },
  {
    "time": "Orlando Magic",
    "temporada": "11",
    "conferencia": "East",
    "desempenho": {
      "jogos": 7,
      "vitorias": 5,
      "derrotas": 2,
      "aproveitamento": 0.714,
      "colocacaoConferencia": 1,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "Joshua.Rayburn",
        "posicao": "PG",
        "overall": 80,
        "overallBase": 79,
        "ajusteTemporada": 1
      },
      {
        "nome": "Teqedo",
        "posicao": "SF",
        "overall": 89,
        "overallBase": 86,
        "ajusteTemporada": 3
      },
      {
        "nome": "Giannis",
        "posicao": "SG",
        "overall": 82,
        "overallBase": 79,
        "ajusteTemporada": 3
      },
      {
        "nome": "rbateamo",
        "posicao": "PF",
        "overall": 87,
        "overallBase": 85,
        "ajusteTemporada": 2
      },
      {
        "nome": "mikedunker",
        "posicao": "PG",
        "overall": 86,
        "overallBase": 85,
        "ajusteTemporada": 1
      }
    ],
    "ajusteEquipe": 2.5
  },
  {
    "time": "Atlanta Hawks",
    "temporada": "11",
    "conferencia": "East",
    "desempenho": {
      "jogos": 7,
      "vitorias": 3,
      "derrotas": 4,
      "aproveitamento": 0.429,
      "colocacaoConferencia": 3,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "SouBojan",
        "posicao": "PG",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "Physo",
        "posicao": "SF",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "Lillard",
        "posicao": "PF",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "GUSa147",
        "posicao": "C",
        "overall": 81,
        "overallBase": 81,
        "ajusteTemporada": 0
      },
      {
        "nome": "Jameican.",
        "posicao": "SG",
        "overall": 79,
        "overallBase": 81,
        "ajusteTemporada": -2
      }
    ],
    "ajusteEquipe": -0.7
  },
  {
    "time": "Toronto Raptors",
    "temporada": "11",
    "conferencia": "East",
    "desempenho": {
      "jogos": 7,
      "vitorias": 1,
      "derrotas": 6,
      "aproveitamento": 0.143,
      "colocacaoConferencia": 4,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "Seth.MacTravish",
        "posicao": "C",
        "overall": 79,
        "overallBase": 80,
        "ajusteTemporada": -1
      },
      {
        "nome": "CiroNeto.",
        "posicao": "PF",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "Ckr7.",
        "posicao": "SF",
        "overall": 87,
        "overallBase": 91,
        "ajusteTemporada": -4
      },
      {
        "nome": "!LM",
        "posicao": "SG",
        "overall": 84,
        "overallBase": 87,
        "ajusteTemporada": -3
      },
      {
        "nome": "EfesiosDrummond",
        "posicao": "SF",
        "overall": 79,
        "overallBase": 82,
        "ajusteTemporada": -3
      },
      {
        "nome": "Cole.Wolforg",
        "posicao": "PG",
        "overall": 79,
        "overallBase": 81,
        "ajusteTemporada": -2
      }
    ],
    "ajusteEquipe": -3.2
  },
  {
    "time": "Los Angeles Lakers",
    "temporada": "11",
    "conferencia": "West",
    "desempenho": {
      "jogos": 7,
      "vitorias": 3,
      "derrotas": 4,
      "aproveitamento": 0.429,
      "colocacaoConferencia": 4,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "Klaus.Ramlow",
        "posicao": "SG",
        "overall": 83,
        "overallBase": 84,
        "ajusteTemporada": -1
      },
      {
        "nome": "hazmitBoy",
        "posicao": "PF",
        "overall": 86,
        "overallBase": 88,
        "ajusteTemporada": -2
      },
      {
        "nome": "Keome",
        "posicao": "PF",
        "overall": 89,
        "overallBase": 89,
        "ajusteTemporada": 0
      },
      {
        "nome": "-Ipod,Russo.",
        "posicao": "SF",
        "overall": 84,
        "overallBase": 86,
        "ajusteTemporada": -2
      },
      {
        "nome": "James-Harden",
        "posicao": "C",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      }
    ],
    "ajusteEquipe": -1.2
  },
  {
    "time": "Los Angeles Clippers",
    "temporada": "11",
    "conferencia": "West",
    "desempenho": {
      "jogos": 7,
      "vitorias": 4,
      "derrotas": 3,
      "aproveitamento": 0.571,
      "colocacaoConferencia": 2,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "FlavioJuliano",
        "posicao": "SF",
        "overall": 92,
        "overallBase": 92,
        "ajusteTemporada": 0
      },
      {
        "nome": "lDeco10",
        "posicao": "C",
        "overall": 90,
        "overallBase": 90,
        "ajusteTemporada": 0
      },
      {
        "nome": "-Sartori",
        "posicao": "SG",
        "overall": 89,
        "overallBase": 88,
        "ajusteTemporada": 1
      },
      {
        "nome": "Thousand.",
        "posicao": "PG",
        "overall": 82,
        "overallBase": 82,
        "ajusteTemporada": 0
      },
      {
        "nome": "Heron.Colonomou",
        "posicao": "PG",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      }
    ],
    "ajusteEquipe": 0.9
  },
  {
    "time": "Golden State Warriors",
    "temporada": "11",
    "conferencia": "West",
    "desempenho": {
      "jogos": 7,
      "vitorias": 4,
      "derrotas": 3,
      "aproveitamento": 0.571,
      "colocacaoConferencia": 3,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "diogoiswwe",
        "posicao": "SF",
        "overall": 91,
        "overallBase": 91,
        "ajusteTemporada": 0
      },
      {
        "nome": "mutucka",
        "posicao": "PF",
        "overall": 82,
        "overallBase": 81,
        "ajusteTemporada": 1
      },
      {
        "nome": "lTrans",
        "posicao": "SG",
        "overall": 87,
        "overallBase": 87,
        "ajusteTemporada": 0
      },
      {
        "nome": "joaotomiya",
        "posicao": "C",
        "overall": 84,
        "overallBase": 84,
        "ajusteTemporada": 0
      },
      {
        "nome": "hendersonha.",
        "posicao": "SG",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "Pedro...Ban",
        "posicao": "SF",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      }
    ],
    "ajusteEquipe": 0.3
  },
  {
    "time": "Cleveland Cavaliers",
    "temporada": "12",
    "conferencia": "East",
    "desempenho": {
      "jogos": 7,
      "vitorias": 6,
      "derrotas": 1,
      "aproveitamento": 0.857,
      "colocacaoConferencia": 1,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "Stepback",
        "posicao": "PF",
        "overall": 82,
        "overallBase": 79,
        "ajusteTemporada": 3
      },
      {
        "nome": "-Sartori",
        "posicao": "SG",
        "overall": 90,
        "overallBase": 88,
        "ajusteTemporada": 2
      },
      {
        "nome": "EfesiosDrummond",
        "posicao": "SF",
        "overall": 85,
        "overallBase": 82,
        "ajusteTemporada": 3
      },
      {
        "nome": "GUSa147",
        "posicao": "PG",
        "overall": 84,
        "overallBase": 81,
        "ajusteTemporada": 3
      },
      {
        "nome": "packgang",
        "posicao": "PG",
        "overall": 85,
        "overallBase": 81,
        "ajusteTemporada": 4
      }
    ],
    "ajusteEquipe": 3.5
  },
  {
    "time": "Milwaukee Bucks",
    "temporada": "12",
    "conferencia": "East",
    "desempenho": {
      "jogos": 7,
      "vitorias": 4,
      "derrotas": 3,
      "aproveitamento": 0.571,
      "colocacaoConferencia": 2,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "Giannis",
        "posicao": "SG",
        "overall": 80,
        "overallBase": 79,
        "ajusteTemporada": 1
      },
      {
        "nome": "Joshua.Rayburn",
        "posicao": "PF",
        "overall": 81,
        "overallBase": 79,
        "ajusteTemporada": 2
      },
      {
        "nome": "Spliked",
        "posicao": "PG",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "tico012",
        "posicao": "SF",
        "overall": 88,
        "overallBase": 86,
        "ajusteTemporada": 2
      },
      {
        "nome": "Jordan.Alonzo",
        "posicao": "PG",
        "overall": 81,
        "overallBase": 79,
        "ajusteTemporada": 2
      },
      {
        "nome": "Thousand.",
        "posicao": "SG",
        "overall": 84,
        "overallBase": 82,
        "ajusteTemporada": 2
      }
    ],
    "ajusteEquipe": 0.9
  },
  {
    "time": "Golden State Warriors",
    "temporada": "12",
    "conferencia": "West",
    "desempenho": {
      "jogos": 7,
      "vitorias": 4,
      "derrotas": 3,
      "aproveitamento": 0.571,
      "colocacaoConferencia": 2,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "diogoiswwe",
        "posicao": "SG",
        "overall": 92,
        "overallBase": 91,
        "ajusteTemporada": 1
      },
      {
        "nome": "lDeco10",
        "posicao": "C",
        "overall": 91,
        "overallBase": 90,
        "ajusteTemporada": 1
      },
      {
        "nome": "zKiirito",
        "posicao": "PG",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "Klay",
        "posicao": "SF",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "MarkManacher",
        "posicao": "PF",
        "overall": 80,
        "overallBase": 79,
        "ajusteTemporada": 1
      },
      {
        "nome": "joaotomiya",
        "posicao": "C",
        "overall": 84,
        "overallBase": 84,
        "ajusteTemporada": 0
      }
    ],
    "ajusteEquipe": 0.9
  },
  {
    "time": "Minnesota Timberwolves",
    "temporada": "12",
    "conferencia": "West",
    "desempenho": {
      "jogos": 7,
      "vitorias": 3,
      "derrotas": 4,
      "aproveitamento": 0.429,
      "colocacaoConferencia": 3,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "dududusao",
        "posicao": "PG",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "rbateamo",
        "posicao": "C",
        "overall": 84,
        "overallBase": 85,
        "ajusteTemporada": -1
      },
      {
        "nome": "SouBojan",
        "posicao": "PG",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "Cironeto.",
        "posicao": "PF",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "mikedunker",
        "posicao": "SG",
        "overall": 85,
        "overallBase": 85,
        "ajusteTemporada": 0
      },
      {
        "nome": "Ckr7.",
        "posicao": "SF",
        "overall": 90,
        "overallBase": 91,
        "ajusteTemporada": -1
      }
    ],
    "ajusteEquipe": -0.7
  },
  {
    "time": "Phoenix Suns",
    "temporada": "12",
    "conferencia": "West",
    "desempenho": {
      "jogos": 7,
      "vitorias": 4,
      "derrotas": 3,
      "aproveitamento": 0.571,
      "colocacaoConferencia": 1,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "jet_",
        "posicao": "SF",
        "overall": 88,
        "overallBase": 87,
        "ajusteTemporada": 1
      },
      {
        "nome": "FlavioJuliano",
        "posicao": "PG",
        "overall": 92,
        "overallBase": 92,
        "ajusteTemporada": 0
      },
      {
        "nome": "EmersonSheik11",
        "posicao": "C",
        "overall": 80,
        "overallBase": 79,
        "ajusteTemporada": 1
      },
      {
        "nome": ":JaviMartinez",
        "posicao": "SG",
        "overall": 86,
        "overallBase": 84,
        "ajusteTemporada": 2
      },
      {
        "nome": "Derian.Berdsain",
        "posicao": "PG",
        "overall": 82,
        "overallBase": 81,
        "ajusteTemporada": 1
      },
      {
        "nome": "Saul",
        "posicao": "PF",
        "overall": 90,
        "overallBase": 88,
        "ajusteTemporada": 2
      }
    ],
    "ajusteEquipe": 1.5
  },
  {
    "time": "Atlanta Hawks",
    "temporada": "13",
    "conferencia": "East",
    "desempenho": {
      "jogos": 7,
      "vitorias": 1,
      "derrotas": 6,
      "aproveitamento": 0.143,
      "colocacaoConferencia": 4,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "Saul",
        "posicao": "SG",
        "overall": 86,
        "overallBase": 88,
        "ajusteTemporada": -2
      },
      {
        "nome": "Giannis",
        "posicao": "SF",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "lTrans",
        "posicao": "PG",
        "overall": 83,
        "overallBase": 87,
        "ajusteTemporada": -4
      },
      {
        "nome": "mikadunker",
        "posicao": "PF",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "CainzinXIT",
        "posicao": "PG",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "BIGsantana",
        "posicao": "C",
        "overall": 79,
        "overallBase": 80,
        "ajusteTemporada": -1
      }
    ],
    "ajusteEquipe": -3.2
  },
  {
    "time": "Chicago Bulls",
    "temporada": "13",
    "conferencia": "East",
    "desempenho": {
      "jogos": 7,
      "vitorias": 1,
      "derrotas": 6,
      "aproveitamento": 0.143,
      "colocacaoConferencia": 3,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "Thousand.",
        "posicao": "PF",
        "overall": 80,
        "overallBase": 82,
        "ajusteTemporada": -2
      },
      {
        "nome": "LM!",
        "posicao": "SG",
        "overall": 84,
        "overallBase": 87,
        "ajusteTemporada": -3
      },
      {
        "nome": "tico012",
        "posicao": "SF",
        "overall": 83,
        "overallBase": 86,
        "ajusteTemporada": -3
      },
      {
        "nome": "hbateamo",
        "posicao": "PG",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "hendersonha",
        "posicao": "SG",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      }
    ],
    "ajusteEquipe": -2.7
  },
  {
    "time": "Boston Celtics",
    "temporada": "13",
    "conferencia": "East",
    "desempenho": {
      "jogos": 7,
      "vitorias": 3,
      "derrotas": 4,
      "aproveitamento": 0.429,
      "colocacaoConferencia": 2,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "pinguimfrito!",
        "posicao": "C",
        "overall": 91,
        "overallBase": 91,
        "ajusteTemporada": 0
      },
      {
        "nome": "-Ipod,Russo",
        "posicao": "SF",
        "overall": 87,
        "overallBase": 86,
        "ajusteTemporada": 1
      },
      {
        "nome": "Dududusao",
        "posicao": "PF",
        "overall": 80,
        "overallBase": 79,
        "ajusteTemporada": 1
      },
      {
        "nome": "joaotomiya",
        "posicao": "C",
        "overall": 85,
        "overallBase": 84,
        "ajusteTemporada": 1
      },
      {
        "nome": "JaviMartinez",
        "posicao": "SG",
        "overall": 84,
        "overallBase": 84,
        "ajusteTemporada": 0
      }
    ],
    "ajusteEquipe": -0.1
  },
  {
    "time": "Washington Wizards",
    "temporada": "13",
    "conferencia": "East",
    "desempenho": {
      "jogos": 7,
      "vitorias": 5,
      "derrotas": 2,
      "aproveitamento": 0.714,
      "colocacaoConferencia": 1,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "FlavioJuliano",
        "posicao": "PG",
        "overall": 95,
        "overallBase": 92,
        "ajusteTemporada": 3
      },
      {
        "nome": "Joshua.Rayburn",
        "posicao": "SG",
        "overall": 82,
        "overallBase": 79,
        "ajusteTemporada": 3
      },
      {
        "nome": "Tree.",
        "posicao": "PF",
        "overall": 91,
        "overallBase": 89,
        "ajusteTemporada": 2
      },
      {
        "nome": "SouBojan",
        "posicao": "C",
        "overall": 80,
        "overallBase": 79,
        "ajusteTemporada": 1
      },
      {
        "nome": "Derian.Berdsain",
        "posicao": "PG",
        "overall": 84,
        "overallBase": 81,
        "ajusteTemporada": 3
      }
    ],
    "ajusteEquipe": 2.5
  },
  {
    "time": "Golden State Warriors",
    "temporada": "13",
    "conferencia": "West",
    "desempenho": {
      "jogos": 7,
      "vitorias": 7,
      "derrotas": 0,
      "aproveitamento": 1,
      "colocacaoConferencia": 1,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "diogoiswwe",
        "posicao": "SG",
        "overall": 95,
        "overallBase": 91,
        "ajusteTemporada": 4
      },
      {
        "nome": "Stepback",
        "posicao": "PG",
        "overall": 85,
        "overallBase": 79,
        "ajusteTemporada": 6
      },
      {
        "nome": "Splikek",
        "posicao": "SF",
        "overall": 83,
        "overallBase": 79,
        "ajusteTemporada": 4
      },
      {
        "nome": "KALASHINIKOV7",
        "posicao": "PG",
        "overall": 84,
        "overallBase": 79,
        "ajusteTemporada": 5
      },
      {
        "nome": "Cironeto.",
        "posicao": "PF",
        "overall": 84,
        "overallBase": 79,
        "ajusteTemporada": 5
      },
      {
        "nome": "Jordan.Alonzo",
        "posicao": "SG",
        "overall": 82,
        "overallBase": 79,
        "ajusteTemporada": 3
      }
    ],
    "ajusteEquipe": 4.5
  },
  {
    "time": "Minnesota Timberwolves",
    "temporada": "13",
    "conferencia": "West",
    "desempenho": {
      "jogos": 7,
      "vitorias": 5,
      "derrotas": 2,
      "aproveitamento": 0.714,
      "colocacaoConferencia": 2,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "zKiirito",
        "posicao": "PF",
        "overall": 80,
        "overallBase": 79,
        "ajusteTemporada": 1
      },
      {
        "nome": "EfesiosDrummond",
        "posicao": "SF",
        "overall": 84,
        "overallBase": 82,
        "ajusteTemporada": 2
      },
      {
        "nome": "-Sartori",
        "posicao": "SG",
        "overall": 91,
        "overallBase": 88,
        "ajusteTemporada": 3
      },
      {
        "nome": ",Fiver",
        "posicao": "C",
        "overall": 81,
        "overallBase": 79,
        "ajusteTemporada": 2
      },
      {
        "nome": "Cole.Wolforg",
        "posicao": "SG",
        "overall": 84,
        "overallBase": 81,
        "ajusteTemporada": 3
      }
    ],
    "ajusteEquipe": 1.9
  },
  {
    "time": "Denver Nuggets",
    "temporada": "13",
    "conferencia": "West",
    "desempenho": {
      "jogos": 7,
      "vitorias": 4,
      "derrotas": 3,
      "aproveitamento": 0.571,
      "colocacaoConferencia": 3,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "Ckr7.",
        "posicao": "SF",
        "overall": 93,
        "overallBase": 91,
        "ajusteTemporada": 2
      },
      {
        "nome": "lDeco10",
        "posicao": "C",
        "overall": 90,
        "overallBase": 90,
        "ajusteTemporada": 0
      },
      {
        "nome": "lFanatic.9",
        "posicao": "PG",
        "overall": 88,
        "overallBase": 88,
        "ajusteTemporada": 0
      },
      {
        "nome": "2pt",
        "posicao": "PF",
        "overall": 81,
        "overallBase": 81,
        "ajusteTemporada": 0
      },
      {
        "nome": "5chmitt",
        "posicao": "PG",
        "overall": 80,
        "overallBase": 79,
        "ajusteTemporada": 1
      }
    ],
    "ajusteEquipe": 0.3
  },
  {
    "time": "Oklahoma City Thunder",
    "temporada": "13",
    "conferencia": "West",
    "desempenho": {
      "jogos": 7,
      "vitorias": 2,
      "derrotas": 5,
      "aproveitamento": 0.286,
      "colocacaoConferencia": 4,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "jet_",
        "posicao": "SG",
        "overall": 85,
        "overallBase": 87,
        "ajusteTemporada": -2
      },
      {
        "nome": "Jhon.Cole",
        "posicao": "C",
        "overall": 84,
        "overallBase": 87,
        "ajusteTemporada": -3
      },
      {
        "nome": "Teqedo",
        "posicao": "SF",
        "overall": 84,
        "overallBase": 86,
        "ajusteTemporada": -2
      },
      {
        "nome": "hazmitBoy",
        "posicao": "PF",
        "overall": 87,
        "overallBase": 88,
        "ajusteTemporada": -1
      },
      {
        "nome": "Klaus.Ramlow",
        "posicao": "PG",
        "overall": 81,
        "overallBase": 84,
        "ajusteTemporada": -3
      }
    ],
    "ajusteEquipe": -2.2
  },
  {
    "time": "Brooklyn Nets",
    "temporada": "14",
    "conferencia": "East",
    "desempenho": {
      "jogos": 7,
      "vitorias": 5,
      "derrotas": 2,
      "aproveitamento": 0.714,
      "colocacaoConferencia": 2,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "Cole.Wolforg",
        "posicao": "PF",
        "overall": 83,
        "overallBase": 81,
        "ajusteTemporada": 2
      },
      {
        "nome": "tico012",
        "posicao": "SF",
        "overall": 89,
        "overallBase": 86,
        "ajusteTemporada": 3
      },
      {
        "nome": "Ckr7.",
        "posicao": "SF",
        "overall": 93,
        "overallBase": 91,
        "ajusteTemporada": 2
      },
      {
        "nome": "Jameican.",
        "posicao": "SG",
        "overall": 84,
        "overallBase": 81,
        "ajusteTemporada": 3
      }
    ],
    "ajusteEquipe": 1.9
  },
  {
    "time": "Cleveland Cavaliers",
    "temporada": "14",
    "conferencia": "East",
    "desempenho": {
      "jogos": 7,
      "vitorias": 7,
      "derrotas": 0,
      "aproveitamento": 1,
      "colocacaoConferencia": 1,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "Stepback",
        "posicao": "PG",
        "overall": 84,
        "overallBase": 79,
        "ajusteTemporada": 5
      },
      {
        "nome": "diogoiswwe",
        "posicao": "SG",
        "overall": 95,
        "overallBase": 91,
        "ajusteTemporada": 4
      },
      {
        "nome": "joaotomiya",
        "posicao": "C",
        "overall": 89,
        "overallBase": 84,
        "ajusteTemporada": 5
      },
      {
        "nome": "Thousand.",
        "posicao": "PF",
        "overall": 86,
        "overallBase": 82,
        "ajusteTemporada": 4
      },
      {
        "nome": "xBruno-BAN",
        "posicao": "PG",
        "overall": 83,
        "overallBase": 79,
        "ajusteTemporada": 4
      }
    ],
    "ajusteEquipe": 4.5
  },
  {
    "time": "Los Angeles Lakers",
    "temporada": "14",
    "conferencia": "West",
    "desempenho": {
      "jogos": 7,
      "vitorias": 5,
      "derrotas": 2,
      "aproveitamento": 0.714,
      "colocacaoConferencia": 1,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "-Sartori",
        "posicao": "SG",
        "overall": 90,
        "overallBase": 88,
        "ajusteTemporada": 2
      },
      {
        "nome": "FlavioJuliano",
        "posicao": "SF",
        "overall": 95,
        "overallBase": 92,
        "ajusteTemporada": 3
      },
      {
        "nome": "Teqedo",
        "posicao": "PF",
        "overall": 87,
        "overallBase": 86,
        "ajusteTemporada": 1
      },
      {
        "nome": "Pixelzinho.",
        "posicao": "C",
        "overall": 84,
        "overallBase": 83,
        "ajusteTemporada": 1
      }
    ],
    "ajusteEquipe": 2.5
  },
  {
    "time": "Sacramento Kings",
    "temporada": "14",
    "conferencia": "West",
    "desempenho": {
      "jogos": 7,
      "vitorias": 3,
      "derrotas": 4,
      "aproveitamento": 0.429,
      "colocacaoConferencia": 3,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "Jhon.Cole",
        "posicao": "C",
        "overall": 86,
        "overallBase": 87,
        "ajusteTemporada": -1
      },
      {
        "nome": "mikedunker",
        "posicao": "SG",
        "overall": 84,
        "overallBase": 85,
        "ajusteTemporada": -1
      },
      {
        "nome": "Joshua.Rayburn",
        "posicao": "PG",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "5chmitt",
        "posicao": "SF",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "Zoi_Pocu",
        "posicao": "PF",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      }
    ],
    "ajusteEquipe": -0.7
  },
  {
    "time": "Phoenix Suns",
    "temporada": "14",
    "conferencia": "West",
    "desempenho": {
      "jogos": 7,
      "vitorias": 4,
      "derrotas": 3,
      "aproveitamento": 0.571,
      "colocacaoConferencia": 2,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "Dududusao",
        "posicao": "PG",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "xfakeprohab",
        "posicao": "SF",
        "overall": 80,
        "overallBase": 79,
        "ajusteTemporada": 1
      },
      {
        "nome": "Aomine",
        "posicao": "SG",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "CiroNeto.",
        "posicao": "PF",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      }
    ],
    "ajusteEquipe": 0.9
  },
  {
    "time": "Cleveland Cavaliers",
    "temporada": "15",
    "conferencia": "East",
    "desempenho": {
      "jogos": 7,
      "vitorias": 6,
      "derrotas": 1,
      "aproveitamento": 0.857,
      "colocacaoConferencia": 1,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "Stepback",
        "posicao": "SF",
        "overall": 82,
        "overallBase": 79,
        "ajusteTemporada": 3
      },
      {
        "nome": "Sartori",
        "posicao": "SG",
        "overall": 92,
        "overallBase": 88,
        "ajusteTemporada": 4
      },
      {
        "nome": "FlavioJuliano",
        "posicao": "PG",
        "overall": 95,
        "overallBase": 92,
        "ajusteTemporada": 3
      },
      {
        "nome": "pinguimfrito!",
        "posicao": "C",
        "overall": 93,
        "overallBase": 91,
        "ajusteTemporada": 2
      },
      {
        "nome": "Thousand.",
        "posicao": "PG",
        "overall": 85,
        "overallBase": 82,
        "ajusteTemporada": 3
      },
      {
        "nome": "lFanatic.9",
        "posicao": "SG",
        "overall": 91,
        "overallBase": 88,
        "ajusteTemporada": 3
      }
    ],
    "ajusteEquipe": 3.5
  },
  {
    "time": "New York Knicks",
    "temporada": "15",
    "conferencia": "East",
    "desempenho": {
      "jogos": 7,
      "vitorias": 1,
      "derrotas": 6,
      "aproveitamento": 0.143,
      "colocacaoConferencia": 3,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "Kyrie",
        "posicao": "PG",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "Ingram",
        "posicao": "SF",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "RichExtreme",
        "posicao": "C",
        "overall": 79,
        "overallBase": 80,
        "ajusteTemporada": -1
      },
      {
        "nome": "!LM",
        "posicao": "SG",
        "overall": 83,
        "overallBase": 87,
        "ajusteTemporada": -4
      },
      {
        "nome": "-Ipod,Russo.",
        "posicao": "PG",
        "overall": 84,
        "overallBase": 86,
        "ajusteTemporada": -2
      },
      {
        "nome": "TrackStarDavid",
        "posicao": "SG",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      }
    ],
    "ajusteEquipe": -2.7
  },
  {
    "time": "Philadelphia 76ers",
    "temporada": "15",
    "conferencia": "East",
    "desempenho": {
      "jogos": 7,
      "vitorias": 3,
      "derrotas": 4,
      "aproveitamento": 0.429,
      "colocacaoConferencia": 2,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "lDeco10",
        "posicao": "C",
        "overall": 90,
        "overallBase": 90,
        "ajusteTemporada": 0
      },
      {
        "nome": "Tico012",
        "posicao": "SF",
        "overall": 86,
        "overallBase": 86,
        "ajusteTemporada": 0
      },
      {
        "nome": "lTrans",
        "posicao": "PG",
        "overall": 87,
        "overallBase": 87,
        "ajusteTemporada": 0
      },
      {
        "nome": "joaotomiya",
        "posicao": "C",
        "overall": 84,
        "overallBase": 84,
        "ajusteTemporada": 0
      },
      {
        "nome": "JaviMartinez",
        "posicao": "SG",
        "overall": 85,
        "overallBase": 84,
        "ajusteTemporada": 1
      },
      {
        "nome": "CiroNeto",
        "posicao": "PF",
        "overall": 80,
        "overallBase": 79,
        "ajusteTemporada": 1
      }
    ],
    "ajusteEquipe": -0.1
  },
  {
    "time": "Los Angeles Lakers",
    "temporada": "15",
    "conferencia": "West",
    "desempenho": {
      "jogos": 7,
      "vitorias": 5,
      "derrotas": 2,
      "aproveitamento": 0.714,
      "colocacaoConferencia": 1,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "Jhon.Cole",
        "posicao": "C",
        "overall": 91,
        "overallBase": 87,
        "ajusteTemporada": 4
      },
      {
        "nome": "diogoiswwe",
        "posicao": "PG",
        "overall": 95,
        "overallBase": 91,
        "ajusteTemporada": 4
      },
      {
        "nome": "Ckr7.",
        "posicao": "SF",
        "overall": 93,
        "overallBase": 91,
        "ajusteTemporada": 2
      },
      {
        "nome": "Bojan",
        "posicao": "PF",
        "overall": 87,
        "overallBase": 85,
        "ajusteTemporada": 2
      },
      {
        "nome": "Klaus.Ramlow",
        "posicao": "SG",
        "overall": 88,
        "overallBase": 84,
        "ajusteTemporada": 4
      },
      {
        "nome": "NatsuDragnnel",
        "posicao": "C",
        "overall": 91,
        "overallBase": 90,
        "ajusteTemporada": 1
      }
    ],
    "ajusteEquipe": 2.5
  },
  {
    "time": "Memphis Grizzlies",
    "temporada": "15",
    "conferencia": "West",
    "desempenho": {
      "jogos": 7,
      "vitorias": 2,
      "derrotas": 5,
      "aproveitamento": 0.286,
      "colocacaoConferencia": 3,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "DVP",
        "posicao": "C",
        "overall": 85,
        "overallBase": 86,
        "ajusteTemporada": -1
      },
      {
        "nome": "DWillis",
        "posicao": "SG",
        "overall": 80,
        "overallBase": 82,
        "ajusteTemporada": -2
      },
      {
        "nome": "BackpackSway",
        "posicao": "SF",
        "overall": 79,
        "overallBase": 81,
        "ajusteTemporada": -2
      },
      {
        "nome": "Joshua.Rayburn",
        "posicao": "PG",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "jet",
        "posicao": "PG",
        "overall": 86,
        "overallBase": 87,
        "ajusteTemporada": -1
      },
      {
        "nome": "GUSa147",
        "posicao": "SG",
        "overall": 79,
        "overallBase": 81,
        "ajusteTemporada": -2
      }
    ],
    "ajusteEquipe": -1.7
  },
  {
    "time": "New Orleans Pelicans",
    "temporada": "15",
    "conferencia": "West",
    "desempenho": {
      "jogos": 7,
      "vitorias": 4,
      "derrotas": 3,
      "aproveitamento": 0.571,
      "colocacaoConferencia": 2,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "Durval",
        "posicao": "SG",
        "overall": 91,
        "overallBase": 90,
        "ajusteTemporada": 1
      },
      {
        "nome": "xfakeprohab",
        "posicao": "SF",
        "overall": 80,
        "overallBase": 79,
        "ajusteTemporada": 1
      },
      {
        "nome": "mikedunker",
        "posicao": "PF",
        "overall": 87,
        "overallBase": 85,
        "ajusteTemporada": 2
      },
      {
        "nome": "Dallas",
        "posicao": "PG",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "Pixelzinho.",
        "posicao": "PG",
        "overall": 84,
        "overallBase": 83,
        "ajusteTemporada": 1
      },
      {
        "nome": "Cole.Wolforg",
        "posicao": "C",
        "overall": 83,
        "overallBase": 81,
        "ajusteTemporada": 2
      }
    ],
    "ajusteEquipe": 0.9
  },
  {
    "time": "Cleveland Cavaliers",
    "temporada": "16",
    "conferencia": "East",
    "desempenho": {
      "jogos": 7,
      "vitorias": 7,
      "derrotas": 0,
      "aproveitamento": 1,
      "colocacaoConferencia": 1,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "Dame",
        "posicao": "SG",
        "overall": 95,
        "overallBase": 92,
        "ajusteTemporada": 3
      },
      {
        "nome": "pinguimfrito!",
        "posicao": "C",
        "overall": 93,
        "overallBase": 91,
        "ajusteTemporada": 2
      },
      {
        "nome": "Ckr7.",
        "posicao": "SF",
        "overall": 92,
        "overallBase": 91,
        "ajusteTemporada": 1
      },
      {
        "nome": "Klay",
        "posicao": "PF",
        "overall": 84,
        "overallBase": 79,
        "ajusteTemporada": 5
      },
      {
        "nome": "brvnks",
        "posicao": "SG",
        "overall": 83,
        "overallBase": 79,
        "ajusteTemporada": 4
      }
    ],
    "ajusteEquipe": 4.5
  },
  {
    "time": "Toronto Raptors",
    "temporada": "16",
    "conferencia": "East",
    "desempenho": {
      "jogos": 7,
      "vitorias": 3,
      "derrotas": 4,
      "aproveitamento": 0.429,
      "colocacaoConferencia": 2,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "CiroNeto.",
        "posicao": "PF",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "Joshua.Rayburn",
        "posicao": "PG",
        "overall": 80,
        "overallBase": 79,
        "ajusteTemporada": 1
      },
      {
        "nome": "Thousand.",
        "posicao": "PG",
        "overall": 83,
        "overallBase": 82,
        "ajusteTemporada": 1
      },
      {
        "nome": "tico012",
        "posicao": "SF",
        "overall": 86,
        "overallBase": 86,
        "ajusteTemporada": 0
      },
      {
        "nome": "Seth.MacTravish",
        "posicao": "C",
        "overall": 79,
        "overallBase": 80,
        "ajusteTemporada": -1
      },
      {
        "nome": "Sartori",
        "posicao": "SG",
        "overall": 89,
        "overallBase": 88,
        "ajusteTemporada": 1
      }
    ],
    "ajusteEquipe": -0.1
  },
  {
    "time": "Dallas Mavericks",
    "temporada": "16",
    "conferencia": "West",
    "desempenho": {
      "jogos": 7,
      "vitorias": 2,
      "derrotas": 5,
      "aproveitamento": 0.286,
      "colocacaoConferencia": 3,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "durval",
        "posicao": "PG",
        "overall": 87,
        "overallBase": 90,
        "ajusteTemporada": -3
      },
      {
        "nome": "xfakeprohab",
        "posicao": "SF",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "DVP",
        "posicao": "C",
        "overall": 85,
        "overallBase": 86,
        "ajusteTemporada": -1
      },
      {
        "nome": "joaotomiya",
        "posicao": "C",
        "overall": 84,
        "overallBase": 84,
        "ajusteTemporada": 0
      },
      {
        "nome": "taiiler",
        "posicao": "PF",
        "overall": 80,
        "overallBase": 80,
        "ajusteTemporada": 0
      }
    ],
    "ajusteEquipe": -1.7
  },
  {
    "time": "Los Angeles Clippers",
    "temporada": "16",
    "conferencia": "West",
    "desempenho": {
      "jogos": 7,
      "vitorias": 5,
      "derrotas": 2,
      "aproveitamento": 0.714,
      "colocacaoConferencia": 1,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "FlavioJuliano",
        "posicao": "SG",
        "overall": 94,
        "overallBase": 92,
        "ajusteTemporada": 2
      },
      {
        "nome": "-Ipod,Russo.",
        "posicao": "PG",
        "overall": 87,
        "overallBase": 86,
        "ajusteTemporada": 1
      },
      {
        "nome": "Bojan",
        "posicao": "SF",
        "overall": 89,
        "overallBase": 85,
        "ajusteTemporada": 4
      },
      {
        "nome": "Pashuko",
        "posicao": "PF",
        "overall": 85,
        "overallBase": 83,
        "ajusteTemporada": 2
      },
      {
        "nome": "JamesHarden",
        "posicao": "PG",
        "overall": 83,
        "overallBase": 79,
        "ajusteTemporada": 4
      }
    ],
    "ajusteEquipe": 2.5
  },
  {
    "time": "Los Angeles Lakers",
    "temporada": "16",
    "conferencia": "West",
    "desempenho": {
      "jogos": 7,
      "vitorias": 4,
      "derrotas": 3,
      "aproveitamento": 0.571,
      "colocacaoConferencia": 2,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "lDeco10",
        "posicao": "C",
        "overall": 90,
        "overallBase": 90,
        "ajusteTemporada": 0
      },
      {
        "nome": "diogoiswwe",
        "posicao": "PG",
        "overall": 92,
        "overallBase": 91,
        "ajusteTemporada": 1
      },
      {
        "nome": "BS.TUGA-BAN",
        "posicao": "SF",
        "overall": 90,
        "overallBase": 90,
        "ajusteTemporada": 0
      },
      {
        "nome": "Pixelzinho.",
        "posicao": "PF",
        "overall": 84,
        "overallBase": 83,
        "ajusteTemporada": 1
      },
      {
        "nome": "Teqedo",
        "posicao": "PG",
        "overall": 86,
        "overallBase": 86,
        "ajusteTemporada": 0
      }
    ],
    "ajusteEquipe": 0.9
  },
  {
    "time": "Miami Heat",
    "temporada": "17",
    "conferencia": "East",
    "desempenho": {
      "jogos": 7,
      "vitorias": 6,
      "derrotas": 1,
      "aproveitamento": 0.857,
      "colocacaoConferencia": 1,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "diogoiswwe",
        "posicao": "PG",
        "overall": 92,
        "overallBase": 91,
        "ajusteTemporada": 1
      },
      {
        "nome": "BS.TUGA-BAN",
        "posicao": "SF",
        "overall": 94,
        "overallBase": 90,
        "ajusteTemporada": 4
      },
      {
        "nome": "lDeco10",
        "posicao": "C",
        "overall": 91,
        "overallBase": 90,
        "ajusteTemporada": 1
      },
      {
        "nome": "lFanatic.9",
        "posicao": "SG",
        "overall": 90,
        "overallBase": 88,
        "ajusteTemporada": 2
      },
      {
        "nome": "hazmitboy",
        "posicao": "PF",
        "overall": 90,
        "overallBase": 88,
        "ajusteTemporada": 2
      },
      {
        "nome": "Tamroc",
        "posicao": "SF",
        "overall": 83,
        "overallBase": 79,
        "ajusteTemporada": 4
      },
      {
        "nome": "Pixelzinho.",
        "posicao": "PG",
        "overall": 86,
        "overallBase": 83,
        "ajusteTemporada": 3
      }
    ],
    "ajusteEquipe": 3.5
  },
  {
    "time": "New York Knicks",
    "temporada": "17",
    "conferencia": "East",
    "desempenho": {
      "jogos": 6,
      "vitorias": 0,
      "derrotas": 6,
      "aproveitamento": 0,
      "colocacaoConferencia": 3,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "Antichrist",
        "posicao": "PG",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "zKiirito",
        "posicao": "PF",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "-Sartori",
        "posicao": "SG",
        "overall": 85,
        "overallBase": 88,
        "ajusteTemporada": -3
      },
      {
        "nome": "tico012",
        "posicao": "SF",
        "overall": 82,
        "overallBase": 86,
        "ajusteTemporada": -4
      },
      {
        "nome": "EfesiosDrummond",
        "posicao": "SF",
        "overall": 79,
        "overallBase": 82,
        "ajusteTemporada": -3
      },
      {
        "nome": "JaviMartinez",
        "posicao": "SG",
        "overall": 81,
        "overallBase": 84,
        "ajusteTemporada": -3
      }
    ],
    "ajusteEquipe": -3.7
  },
  {
    "time": "Chicago Bulls",
    "temporada": "17",
    "conferencia": "East",
    "desempenho": {
      "jogos": 6,
      "vitorias": 3,
      "derrotas": 3,
      "aproveitamento": 0.5,
      "colocacaoConferencia": 2,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "Kyrie",
        "posicao": "SG",
        "overall": 80,
        "overallBase": 79,
        "ajusteTemporada": 1
      },
      {
        "nome": "DVP",
        "posicao": "C",
        "overall": 85,
        "overallBase": 86,
        "ajusteTemporada": -1
      },
      {
        "nome": "Ingram",
        "posicao": "PG",
        "overall": 80,
        "overallBase": 79,
        "ajusteTemporada": 1
      },
      {
        "nome": "Inaudible",
        "posicao": "SF",
        "overall": 87,
        "overallBase": 87,
        "ajusteTemporada": 0
      },
      {
        "nome": "VloneWarren",
        "posicao": "PF",
        "overall": 80,
        "overallBase": 79,
        "ajusteTemporada": 1
      },
      {
        "nome": "Klay",
        "posicao": "SG",
        "overall": 80,
        "overallBase": 79,
        "ajusteTemporada": 1
      }
    ],
    "ajusteEquipe": 0.4
  },
  {
    "time": "Utah Jazz",
    "temporada": "17",
    "conferencia": "West",
    "desempenho": {
      "jogos": 7,
      "vitorias": 2,
      "derrotas": 5,
      "aproveitamento": 0.286,
      "colocacaoConferencia": 3,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "Joshua.Rayburn",
        "posicao": "PG",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "Bojan",
        "posicao": "SF",
        "overall": 82,
        "overallBase": 85,
        "ajusteTemporada": -3
      },
      {
        "nome": "Keome",
        "posicao": "PF",
        "overall": 86,
        "overallBase": 89,
        "ajusteTemporada": -3
      },
      {
        "nome": "Teqedo",
        "posicao": "C",
        "overall": 85,
        "overallBase": 86,
        "ajusteTemporada": -1
      },
      {
        "nome": "YashiroYT",
        "posicao": "PG",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "-Ipod,Russo.",
        "posicao": "SF",
        "overall": 85,
        "overallBase": 86,
        "ajusteTemporada": -1
      }
    ],
    "ajusteEquipe": -1.7
  },
  {
    "time": "Memphis Grizzlies",
    "temporada": "17",
    "conferencia": "West",
    "desempenho": {
      "jogos": 7,
      "vitorias": 4,
      "derrotas": 3,
      "aproveitamento": 0.571,
      "colocacaoConferencia": 2,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "Durval",
        "posicao": "PG",
        "overall": 90,
        "overallBase": 90,
        "ajusteTemporada": 0
      },
      {
        "nome": "FlavioJuliano",
        "posicao": "SF",
        "overall": 94,
        "overallBase": 92,
        "ajusteTemporada": 2
      },
      {
        "nome": "-NatsuDragnnel",
        "posicao": "C",
        "overall": 90,
        "overallBase": 90,
        "ajusteTemporada": 0
      },
      {
        "nome": "mikedunker",
        "posicao": "PG",
        "overall": 85,
        "overallBase": 85,
        "ajusteTemporada": 0
      },
      {
        "nome": "CiroNeto.",
        "posicao": "PF",
        "overall": 81,
        "overallBase": 79,
        "ajusteTemporada": 2
      },
      {
        "nome": "!LM",
        "posicao": "SG",
        "overall": 87,
        "overallBase": 87,
        "ajusteTemporada": 0
      }
    ],
    "ajusteEquipe": 0.9
  },
  {
    "time": "Portland Trail Blazers",
    "temporada": "17",
    "conferencia": "West",
    "desempenho": {
      "jogos": 7,
      "vitorias": 5,
      "derrotas": 2,
      "aproveitamento": 0.714,
      "colocacaoConferencia": 1,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "Seth.MacTravish",
        "posicao": "SG",
        "overall": 82,
        "overallBase": 80,
        "ajusteTemporada": 2
      },
      {
        "nome": "Ckr7.",
        "posicao": "SF",
        "overall": 91,
        "overallBase": 91,
        "ajusteTemporada": 0
      },
      {
        "nome": "pinguimfrito!",
        "posicao": "C",
        "overall": 93,
        "overallBase": 91,
        "ajusteTemporada": 2
      },
      {
        "nome": "xfakeprohab",
        "posicao": "PF",
        "overall": 82,
        "overallBase": 79,
        "ajusteTemporada": 3
      },
      {
        "nome": "joaotomiya",
        "posicao": "C",
        "overall": 86,
        "overallBase": 84,
        "ajusteTemporada": 2
      },
      {
        "nome": "Splikek",
        "posicao": "SG",
        "overall": 81,
        "overallBase": 79,
        "ajusteTemporada": 2
      }
    ],
    "ajusteEquipe": 2.5
  },
  {
    "time": "Chicago Bulls",
    "temporada": "18",
    "conferencia": "East",
    "desempenho": {
      "jogos": 7,
      "vitorias": 3,
      "derrotas": 4,
      "aproveitamento": 0.429,
      "colocacaoConferencia": 4,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "jet_",
        "posicao": "PF",
        "overall": 85,
        "overallBase": 87,
        "ajusteTemporada": -2
      },
      {
        "nome": "Joshua.Rayburn",
        "posicao": "C",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "Persea",
        "posicao": "SF",
        "overall": 86,
        "overallBase": 86,
        "ajusteTemporada": 0
      },
      {
        "nome": "Zat.ban.ban",
        "posicao": "SG",
        "overall": 81,
        "overallBase": 81,
        "ajusteTemporada": 0
      },
      {
        "nome": "Klaus.Ramlow",
        "posicao": "SG",
        "overall": 84,
        "overallBase": 84,
        "ajusteTemporada": 0
      },
      {
        "nome": "lTrans",
        "posicao": "PG",
        "overall": 87,
        "overallBase": 87,
        "ajusteTemporada": 0
      }
    ],
    "ajusteEquipe": -1.2
  },
  {
    "time": "Cleveland Cavaliers",
    "temporada": "18",
    "conferencia": "East",
    "desempenho": {
      "jogos": 7,
      "vitorias": 5,
      "derrotas": 2,
      "aproveitamento": 0.714,
      "colocacaoConferencia": 2,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "Dame",
        "posicao": "PG",
        "overall": 93,
        "overallBase": 92,
        "ajusteTemporada": 1
      },
      {
        "nome": "Physo",
        "posicao": "SF",
        "overall": 80,
        "overallBase": 79,
        "ajusteTemporada": 1
      },
      {
        "nome": "pinguimfrito!",
        "posicao": "C",
        "overall": 94,
        "overallBase": 91,
        "ajusteTemporada": 3
      },
      {
        "nome": "mikedunker",
        "posicao": "PF",
        "overall": 87,
        "overallBase": 85,
        "ajusteTemporada": 2
      },
      {
        "nome": "-Ipod,Russo.",
        "posicao": "PG",
        "overall": 88,
        "overallBase": 86,
        "ajusteTemporada": 2
      }
    ],
    "ajusteEquipe": 1.9
  },
  {
    "time": "Miami Heat",
    "temporada": "18",
    "conferencia": "East",
    "desempenho": {
      "jogos": 7,
      "vitorias": 5,
      "derrotas": 2,
      "aproveitamento": 0.714,
      "colocacaoConferencia": 1,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "BS.TUGA-BAN",
        "posicao": "SF",
        "overall": 93,
        "overallBase": 90,
        "ajusteTemporada": 3
      },
      {
        "nome": "Antichrist",
        "posicao": "PG",
        "overall": 81,
        "overallBase": 79,
        "ajusteTemporada": 2
      },
      {
        "nome": "zKiirito",
        "posicao": "PF",
        "overall": 82,
        "overallBase": 79,
        "ajusteTemporada": 3
      },
      {
        "nome": "Zion",
        "posicao": "C",
        "overall": 82,
        "overallBase": 79,
        "ajusteTemporada": 3
      },
      {
        "nome": "MID",
        "posicao": "PG",
        "overall": 82,
        "overallBase": 79,
        "ajusteTemporada": 3
      }
    ],
    "ajusteEquipe": 2.5
  },
  {
    "time": "Toronto Raptors",
    "temporada": "18",
    "conferencia": "East",
    "desempenho": {
      "jogos": 7,
      "vitorias": 3,
      "derrotas": 4,
      "aproveitamento": 0.429,
      "colocacaoConferencia": 3,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "DVP",
        "posicao": "C",
        "overall": 85,
        "overallBase": 86,
        "ajusteTemporada": -1
      },
      {
        "nome": "Ingram",
        "posicao": "PG",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "Inaudible",
        "posicao": "PF",
        "overall": 87,
        "overallBase": 87,
        "ajusteTemporada": 0
      },
      {
        "nome": "UnderArmours",
        "posicao": "PG",
        "overall": 80,
        "overallBase": 82,
        "ajusteTemporada": -2
      },
      {
        "nome": "Jameican.",
        "posicao": "SG",
        "overall": 80,
        "overallBase": 81,
        "ajusteTemporada": -1
      }
    ],
    "ajusteEquipe": -0.7
  },
  {
    "time": "Dallas Mavericks",
    "temporada": "18",
    "conferencia": "West",
    "desempenho": {
      "jogos": 7,
      "vitorias": 2,
      "derrotas": 5,
      "aproveitamento": 0.286,
      "colocacaoConferencia": 3,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "lDeco10",
        "posicao": "C",
        "overall": 90,
        "overallBase": 90,
        "ajusteTemporada": 0
      },
      {
        "nome": "durval",
        "posicao": "PG",
        "overall": 88,
        "overallBase": 90,
        "ajusteTemporada": -2
      },
      {
        "nome": "Bojan",
        "posicao": "PF",
        "overall": 83,
        "overallBase": 85,
        "ajusteTemporada": -2
      },
      {
        "nome": "xfakeprohab",
        "posicao": "PG",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "EfesiosDrummond",
        "posicao": "SF",
        "overall": 82,
        "overallBase": 82,
        "ajusteTemporada": 0
      },
      {
        "nome": "hendersonha.",
        "posicao": "SG",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      }
    ],
    "ajusteEquipe": -1.7
  },
  {
    "time": "Sacramento Kings",
    "temporada": "18",
    "conferencia": "West",
    "desempenho": {
      "jogos": 7,
      "vitorias": 3,
      "derrotas": 4,
      "aproveitamento": 0.429,
      "colocacaoConferencia": 2,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "lFanatic.9",
        "posicao": "PG",
        "overall": 89,
        "overallBase": 88,
        "ajusteTemporada": 1
      },
      {
        "nome": "-Sartori",
        "posicao": "SG",
        "overall": 88,
        "overallBase": 88,
        "ajusteTemporada": 0
      },
      {
        "nome": "hazmitBoy",
        "posicao": "PF",
        "overall": 88,
        "overallBase": 88,
        "ajusteTemporada": 0
      },
      {
        "nome": "Pixelzinho.",
        "posicao": "C",
        "overall": 82,
        "overallBase": 83,
        "ajusteTemporada": -1
      },
      {
        "nome": "!LM",
        "posicao": "SG",
        "overall": 88,
        "overallBase": 87,
        "ajusteTemporada": 1
      },
      {
        "nome": "Phillips.Russel",
        "posicao": "PG",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      }
    ],
    "ajusteEquipe": -0.1
  },
  {
    "time": "San Antonio Spurs",
    "temporada": "18",
    "conferencia": "West",
    "desempenho": {
      "jogos": 7,
      "vitorias": 2,
      "derrotas": 5,
      "aproveitamento": 0.286,
      "colocacaoConferencia": 4,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "Ckr7.",
        "posicao": "SF",
        "overall": 89,
        "overallBase": 91,
        "ajusteTemporada": -2
      },
      {
        "nome": "Keome",
        "posicao": "PF",
        "overall": 88,
        "overallBase": 89,
        "ajusteTemporada": -1
      },
      {
        "nome": "joaotomiya",
        "posicao": "C",
        "overall": 83,
        "overallBase": 84,
        "ajusteTemporada": -1
      },
      {
        "nome": "Retoll",
        "posicao": "SG",
        "overall": 82,
        "overallBase": 85,
        "ajusteTemporada": -3
      },
      {
        "nome": "CiroNeto.",
        "posicao": "PF",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      }
    ],
    "ajusteEquipe": -2.2
  },
  {
    "time": "Atlanta Hawks",
    "temporada": "19",
    "conferencia": "East",
    "desempenho": {
      "jogos": 9,
      "vitorias": 5,
      "derrotas": 4,
      "aproveitamento": 0.556,
      "colocacaoConferencia": 2,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "Bojan",
        "posicao": "PG",
        "overall": 86,
        "overallBase": 85,
        "ajusteTemporada": 1
      },
      {
        "nome": "lFanatic.9",
        "posicao": "PF",
        "overall": 86,
        "overallBase": 88,
        "ajusteTemporada": -2
      },
      {
        "nome": "-Sartori",
        "posicao": "SG",
        "overall": 88,
        "overallBase": 88,
        "ajusteTemporada": 0
      },
      {
        "nome": "!LM",
        "posicao": "SG",
        "overall": 86,
        "overallBase": 87,
        "ajusteTemporada": -1
      }
    ],
    "ajusteEquipe": 0.79
  },
  {
    "time": "Boston Celtics",
    "temporada": "19",
    "conferencia": "East",
    "desempenho": {
      "jogos": 9,
      "vitorias": 3,
      "derrotas": 6,
      "aproveitamento": 0.333,
      "colocacaoConferencia": 4,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "Cole",
        "posicao": "C",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "Zion",
        "posicao": "SG",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "lDeco10",
        "posicao": "C",
        "overall": 87,
        "overallBase": 90,
        "ajusteTemporada": -3
      },
      {
        "nome": "Podd",
        "posicao": "SF",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      }
    ],
    "ajusteEquipe": -1.87
  },
  {
    "time": "Charlotte Hornets",
    "temporada": "19",
    "conferencia": "East",
    "desempenho": {
      "jogos": 9,
      "vitorias": 5,
      "derrotas": 4,
      "aproveitamento": 0.556,
      "colocacaoConferencia": 3,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "AntiChrist",
        "posicao": "PG",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "Epheus",
        "posicao": "C",
        "overall": 88,
        "overallBase": 90,
        "ajusteTemporada": -2
      },
      {
        "nome": "Ckr7.",
        "posicao": "SF",
        "overall": 90,
        "overallBase": 91,
        "ajusteTemporada": -1
      },
      {
        "nome": "CiroNeto.",
        "posicao": "PF",
        "overall": 80,
        "overallBase": 79,
        "ajusteTemporada": 1
      }
    ],
    "ajusteEquipe": 0.19
  },
  {
    "time": "Chicago Bulls",
    "temporada": "19",
    "conferencia": "East",
    "desempenho": {
      "jogos": 9,
      "vitorias": 6,
      "derrotas": 3,
      "aproveitamento": 0.667,
      "colocacaoConferencia": 1,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "durvalx",
        "posicao": "SG",
        "overall": 91,
        "overallBase": 90,
        "ajusteTemporada": 1
      },
      {
        "nome": "-Ipod,Russo.",
        "posicao": "SF",
        "overall": 87,
        "overallBase": 86,
        "ajusteTemporada": 1
      },
      {
        "nome": "hazmitBoy",
        "posicao": "PF",
        "overall": 88,
        "overallBase": 88,
        "ajusteTemporada": 0
      },
      {
        "nome": "Keome",
        "posicao": "PF",
        "overall": 89,
        "overallBase": 89,
        "ajusteTemporada": 0
      },
      {
        "nome": "rbateamo",
        "posicao": "PG",
        "overall": 87,
        "overallBase": 85,
        "ajusteTemporada": 2
      }
    ],
    "ajusteEquipe": 2.17
  },
  {
    "time": "Milwaukee Bucks",
    "temporada": "19",
    "conferencia": "East",
    "desempenho": {
      "jogos": 9,
      "vitorias": 0,
      "derrotas": 9,
      "aproveitamento": 0,
      "colocacaoConferencia": 5,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "Seth.MacTravish",
        "posicao": "PG",
        "overall": 79,
        "overallBase": 80,
        "ajusteTemporada": -1
      }
    ],
    "ajusteEquipe": -4.5
  },
  {
    "time": "Golden State Warriors",
    "temporada": "19",
    "conferencia": "West",
    "desempenho": {
      "jogos": 9,
      "vitorias": 4,
      "derrotas": 5,
      "aproveitamento": 0.444,
      "colocacaoConferencia": 4,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "diogoiswwe",
        "posicao": "SG",
        "overall": 90,
        "overallBase": 91,
        "ajusteTemporada": -1
      },
      {
        "nome": "Leopardo",
        "posicao": "PG",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "Crossover",
        "posicao": "SF",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "BIGsantana",
        "posicao": "PF",
        "overall": 79,
        "overallBase": 80,
        "ajusteTemporada": -1
      }
    ],
    "ajusteEquipe": -1.09
  },
  {
    "time": "Houston Rockets",
    "temporada": "19",
    "conferencia": "West",
    "desempenho": {
      "jogos": 9,
      "vitorias": 8,
      "derrotas": 1,
      "aproveitamento": 0.889,
      "colocacaoConferencia": 1,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "tico012",
        "posicao": "SF",
        "overall": 90,
        "overallBase": 86,
        "ajusteTemporada": 4
      },
      {
        "nome": "Dame",
        "posicao": "PG",
        "overall": 95,
        "overallBase": 92,
        "ajusteTemporada": 3
      },
      {
        "nome": "jet_",
        "posicao": "SG",
        "overall": 91,
        "overallBase": 87,
        "ajusteTemporada": 4
      },
      {
        "nome": "Klaus.Ramlow",
        "posicao": "C",
        "overall": 87,
        "overallBase": 84,
        "ajusteTemporada": 3
      },
      {
        "nome": "lTrans",
        "posicao": "PG",
        "overall": 91,
        "overallBase": 87,
        "ajusteTemporada": 4
      }
    ],
    "ajusteEquipe": 3.72
  },
  {
    "time": "Minnesota Timberwolves",
    "temporada": "19",
    "conferencia": "West",
    "desempenho": {
      "jogos": 9,
      "vitorias": 4,
      "derrotas": 5,
      "aproveitamento": 0.444,
      "colocacaoConferencia": 3,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "EfesiosDrummond",
        "posicao": "SF",
        "overall": 82,
        "overallBase": 82,
        "ajusteTemporada": 0
      },
      {
        "nome": "Kirin",
        "posicao": "SG",
        "overall": 85,
        "overallBase": 85,
        "ajusteTemporada": 0
      },
      {
        "nome": "Retoll",
        "posicao": "PG",
        "overall": 84,
        "overallBase": 85,
        "ajusteTemporada": -1
      }
    ],
    "ajusteEquipe": -0.59
  },
  {
    "time": "Phoenix Suns",
    "temporada": "19",
    "conferencia": "West",
    "desempenho": {
      "jogos": 9,
      "vitorias": 6,
      "derrotas": 3,
      "aproveitamento": 0.667,
      "colocacaoConferencia": 2,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "DVP",
        "posicao": "C",
        "overall": 88,
        "overallBase": 86,
        "ajusteTemporada": 2
      },
      {
        "nome": "Ingram",
        "posicao": "PG",
        "overall": 80,
        "overallBase": 79,
        "ajusteTemporada": 1
      },
      {
        "nome": "UnderArmours",
        "posicao": "SF",
        "overall": 83,
        "overallBase": 82,
        "ajusteTemporada": 1
      },
      {
        "nome": "packgang",
        "posicao": "SG",
        "overall": 82,
        "overallBase": 81,
        "ajusteTemporada": 1
      }
    ],
    "ajusteEquipe": 1.57
  },
  {
    "time": "Milwaukee Bucks",
    "temporada": "19.1",
    "conferencia": "East",
    "desempenho": {
      "jogos": 2,
      "vitorias": 0,
      "derrotas": 2,
      "aproveitamento": 0,
      "colocacaoConferencia": 4,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "Gianlucca",
        "posicao": "PG",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "Stofrey",
        "posicao": "PF",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "Epheus",
        "posicao": "SF",
        "overall": 87,
        "overallBase": 90,
        "ajusteTemporada": -3
      },
      {
        "nome": "Jrue",
        "posicao": "C",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "!LM",
        "posicao": "SG",
        "overall": 82,
        "overallBase": 87,
        "ajusteTemporada": -5
      }
    ],
    "ajusteEquipe": -4.2
  },
  {
    "time": "Indiana Pacers",
    "temporada": "19.1",
    "conferencia": "East",
    "desempenho": {
      "jogos": 5,
      "vitorias": 5,
      "derrotas": 0,
      "aproveitamento": 1,
      "colocacaoConferencia": 1,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "DVP",
        "posicao": "C",
        "overall": 90,
        "overallBase": 86,
        "ajusteTemporada": 4
      },
      {
        "nome": "Haitians",
        "posicao": "SG",
        "overall": 91,
        "overallBase": 87,
        "ajusteTemporada": 4
      },
      {
        "nome": "Inaudible",
        "posicao": "PG",
        "overall": 93,
        "overallBase": 87,
        "ajusteTemporada": 6
      },
      {
        "nome": "BackpackSway",
        "posicao": "PF",
        "overall": 85,
        "overallBase": 81,
        "ajusteTemporada": 4
      },
      {
        "nome": "Liemar",
        "posicao": "PG",
        "overall": 83,
        "overallBase": 79,
        "ajusteTemporada": 4
      }
    ],
    "ajusteEquipe": 4.5
  },
  {
    "time": "New York Knicks",
    "temporada": "19.1",
    "conferencia": "East",
    "desempenho": {
      "jogos": 4,
      "vitorias": 2,
      "derrotas": 2,
      "aproveitamento": 0.5,
      "colocacaoConferencia": 2,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "FlavioJuliano",
        "posicao": "SG",
        "overall": 93,
        "overallBase": 92,
        "ajusteTemporada": 1
      },
      {
        "nome": "lTrans",
        "posicao": "SF",
        "overall": 87,
        "overallBase": 87,
        "ajusteTemporada": 0
      },
      {
        "nome": "Retoll",
        "posicao": "PG",
        "overall": 86,
        "overallBase": 85,
        "ajusteTemporada": 1
      },
      {
        "nome": "jet_",
        "posicao": "C",
        "overall": 88,
        "overallBase": 87,
        "ajusteTemporada": 1
      }
    ],
    "ajusteEquipe": 0.4
  },
  {
    "time": "Cincinnati Royals",
    "temporada": "19.1",
    "conferencia": "West",
    "desempenho": {
      "jogos": 4,
      "vitorias": 2,
      "derrotas": 2,
      "aproveitamento": 0.5,
      "colocacaoConferencia": 2,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "Dame",
        "posicao": "PG",
        "overall": 92,
        "overallBase": 92,
        "ajusteTemporada": 0
      },
      {
        "nome": "-Sartori",
        "posicao": "SG",
        "overall": 90,
        "overallBase": 88,
        "ajusteTemporada": 2
      },
      {
        "nome": "Izumicik",
        "posicao": "SF",
        "overall": 81,
        "overallBase": 79,
        "ajusteTemporada": 2
      },
      {
        "nome": "Crossover",
        "posicao": "PF",
        "overall": 80,
        "overallBase": 79,
        "ajusteTemporada": 1
      },
      {
        "nome": "Jhon.Cole",
        "posicao": "C",
        "overall": 87,
        "overallBase": 87,
        "ajusteTemporada": 0
      }
    ],
    "ajusteEquipe": 0.4
  },
  {
    "time": "Denver Nuggets",
    "temporada": "19.1",
    "conferencia": "West",
    "desempenho": {
      "jogos": 5,
      "vitorias": 2,
      "derrotas": 3,
      "aproveitamento": 0.4,
      "colocacaoConferencia": 3,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "-Ipod,Russo.",
        "posicao": "PG",
        "overall": 85,
        "overallBase": 86,
        "ajusteTemporada": -1
      },
      {
        "nome": "Ckr7.",
        "posicao": "SF",
        "overall": 91,
        "overallBase": 91,
        "ajusteTemporada": 0
      },
      {
        "nome": "Bojan",
        "posicao": "PF",
        "overall": 84,
        "overallBase": 85,
        "ajusteTemporada": -1
      },
      {
        "nome": "tico012",
        "posicao": "SF",
        "overall": 85,
        "overallBase": 86,
        "ajusteTemporada": -1
      }
    ],
    "ajusteEquipe": -0.9
  },
  {
    "time": "Seattle Supersonics",
    "temporada": "19.1",
    "conferencia": "West",
    "desempenho": {
      "jogos": 6,
      "vitorias": 1,
      "derrotas": 5,
      "aproveitamento": 0.167,
      "colocacaoConferencia": 4,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "durval",
        "posicao": "PG",
        "overall": 87,
        "overallBase": 90,
        "ajusteTemporada": -3
      },
      {
        "nome": "rbateamo",
        "posicao": "SG",
        "overall": 82,
        "overallBase": 85,
        "ajusteTemporada": -3
      },
      {
        "nome": "EfesiosDrummond",
        "posicao": "SF",
        "overall": 80,
        "overallBase": 82,
        "ajusteTemporada": -2
      },
      {
        "nome": "CiroNeto.",
        "posicao": "PF",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      }
    ],
    "ajusteEquipe": -3.03
  },
  {
    "time": "San Antonio Spurs",
    "temporada": "19.1",
    "conferencia": "West",
    "desempenho": {
      "jogos": 6,
      "vitorias": 5,
      "derrotas": 1,
      "aproveitamento": 0.833,
      "colocacaoConferencia": 1,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "Keome",
        "posicao": "PF",
        "overall": 92,
        "overallBase": 89,
        "ajusteTemporada": 3
      },
      {
        "nome": "Zion",
        "posicao": "SF",
        "overall": 83,
        "overallBase": 79,
        "ajusteTemporada": 4
      },
      {
        "nome": "hazmitBoy",
        "posicao": "PF",
        "overall": 90,
        "overallBase": 88,
        "ajusteTemporada": 2
      },
      {
        "nome": "Zat.ban.ban",
        "posicao": "SG",
        "overall": 84,
        "overallBase": 81,
        "ajusteTemporada": 3
      },
      {
        "nome": "Podd",
        "posicao": "PG",
        "overall": 82,
        "overallBase": 79,
        "ajusteTemporada": 3
      }
    ],
    "ajusteEquipe": 3.33
  },
  {
    "time": "Boston Celtics",
    "temporada": "20.1",
    "conferencia": "East",
    "desempenho": {
      "jogos": 4,
      "vitorias": 2,
      "derrotas": 2,
      "aproveitamento": 0.5,
      "colocacaoConferencia": 2,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "lDeco10",
        "posicao": "C",
        "overall": 90,
        "overallBase": 90,
        "ajusteTemporada": 0
      },
      {
        "nome": "diogoiswwe",
        "posicao": "PG",
        "overall": 92,
        "overallBase": 91,
        "ajusteTemporada": 1
      },
      {
        "nome": "-Ipod,Russo.",
        "posicao": "SF",
        "overall": 85,
        "overallBase": 86,
        "ajusteTemporada": -1
      },
      {
        "nome": "Sartori",
        "posicao": "SG",
        "overall": 90,
        "overallBase": 88,
        "ajusteTemporada": 2
      },
      {
        "nome": ",cebola",
        "posicao": "PG",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      }
    ],
    "ajusteEquipe": 0.4
  },
  {
    "time": "Washington Wizards",
    "temporada": "20.1",
    "conferencia": "East",
    "desempenho": {
      "jogos": 3,
      "vitorias": 2,
      "derrotas": 1,
      "aproveitamento": 0.667,
      "colocacaoConferencia": 1,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "hazmitBoy",
        "posicao": "PF",
        "overall": 88,
        "overallBase": 88,
        "ajusteTemporada": 0
      },
      {
        "nome": "lFanatic.9",
        "posicao": "PG",
        "overall": 89,
        "overallBase": 88,
        "ajusteTemporada": 1
      },
      {
        "nome": "Keome",
        "posicao": "PF",
        "overall": 87,
        "overallBase": 89,
        "ajusteTemporada": -2
      },
      {
        "nome": "Epheus",
        "posicao": "SF",
        "overall": 91,
        "overallBase": 90,
        "ajusteTemporada": 1
      },
      {
        "nome": "Zion",
        "posicao": "SG",
        "overall": 81,
        "overallBase": 79,
        "ajusteTemporada": 2
      }
    ],
    "ajusteEquipe": 2.17
  },
  {
    "time": "Houston Rockets",
    "temporada": "20.1",
    "conferencia": "West",
    "desempenho": {
      "jogos": 3,
      "vitorias": 1,
      "derrotas": 2,
      "aproveitamento": 0.333,
      "colocacaoConferencia": 2,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "Dame",
        "posicao": "PG",
        "overall": 92,
        "overallBase": 92,
        "ajusteTemporada": 0
      },
      {
        "nome": "tico012",
        "posicao": "SF",
        "overall": 85,
        "overallBase": 86,
        "ajusteTemporada": -1
      },
      {
        "nome": "lTrans",
        "posicao": "PF",
        "overall": 86,
        "overallBase": 87,
        "ajusteTemporada": -1
      },
      {
        "nome": "pinguimfrito!",
        "posicao": "C",
        "overall": 90,
        "overallBase": 91,
        "ajusteTemporada": -1
      }
    ],
    "ajusteEquipe": -0.77
  },
  {
    "time": "Los Angeles Clippers",
    "temporada": "20.1",
    "conferencia": "West",
    "desempenho": {
      "jogos": 4,
      "vitorias": 1,
      "derrotas": 3,
      "aproveitamento": 0.25,
      "colocacaoConferencia": 3,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "FlavioJuliano",
        "posicao": "PG",
        "overall": 91,
        "overallBase": 92,
        "ajusteTemporada": -1
      },
      {
        "nome": "jet_",
        "posicao": "SF",
        "overall": 85,
        "overallBase": 87,
        "ajusteTemporada": -2
      },
      {
        "nome": "Bojan",
        "posicao": "SG",
        "overall": 84,
        "overallBase": 85,
        "ajusteTemporada": -1
      },
      {
        "nome": "mikedunker",
        "posicao": "C",
        "overall": 83,
        "overallBase": 85,
        "ajusteTemporada": -2
      }
    ],
    "ajusteEquipe": -1.95
  },
  {
    "time": "Memphis Grizzlies",
    "temporada": "20.1",
    "conferencia": "West",
    "desempenho": {
      "jogos": 5,
      "vitorias": 5,
      "derrotas": 0,
      "aproveitamento": 1,
      "colocacaoConferencia": 1,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "DVP",
        "posicao": "C",
        "overall": 90,
        "overallBase": 86,
        "ajusteTemporada": 4
      },
      {
        "nome": "Crowbirde",
        "posicao": "SG",
        "overall": 84,
        "overallBase": 79,
        "ajusteTemporada": 5
      },
      {
        "nome": "RichExtreme",
        "posicao": "SF",
        "overall": 84,
        "overallBase": 80,
        "ajusteTemporada": 4
      }
    ],
    "ajusteEquipe": 4.5
  },
  {
    "time": "Atlanta Hawks",
    "temporada": "20",
    "conferencia": "East",
    "desempenho": {
      "jogos": 5,
      "vitorias": 2,
      "derrotas": 3,
      "aproveitamento": 0.4,
      "colocacaoConferencia": 3,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "Saul",
        "posicao": "PG",
        "overall": 87,
        "overallBase": 88,
        "ajusteTemporada": -1
      },
      {
        "nome": "zKiirito",
        "posicao": "SG",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      },
      {
        "nome": "EfesiosDrummond",
        "posicao": "SF",
        "overall": 82,
        "overallBase": 82,
        "ajusteTemporada": 0
      },
      {
        "nome": "Bojan",
        "posicao": "PF",
        "overall": 84,
        "overallBase": 85,
        "ajusteTemporada": -1
      },
      {
        "nome": "Joao.Miguel",
        "posicao": "C",
        "overall": 79,
        "overallBase": 79,
        "ajusteTemporada": 0
      }
    ],
    "ajusteEquipe": -0.9
  },
  {
    "time": "Detroit Pistons",
    "temporada": "20",
    "conferencia": "East",
    "desempenho": {
      "jogos": 5,
      "vitorias": 4,
      "derrotas": 1,
      "aproveitamento": 0.8,
      "colocacaoConferencia": 1,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "pinguimfrito!",
        "posicao": "C",
        "overall": 92,
        "overallBase": 91,
        "ajusteTemporada": 1
      },
      {
        "nome": "Dame",
        "posicao": "PG",
        "overall": 95,
        "overallBase": 92,
        "ajusteTemporada": 3
      },
      {
        "nome": "mikedunker",
        "posicao": "SG",
        "overall": 87,
        "overallBase": 85,
        "ajusteTemporada": 2
      },
      {
        "nome": "Ckr7.",
        "posicao": "SF",
        "overall": 93,
        "overallBase": 91,
        "ajusteTemporada": 2
      },
      {
        "nome": "lTrans",
        "posicao": "PF",
        "overall": 91,
        "overallBase": 87,
        "ajusteTemporada": 4
      }
    ],
    "ajusteEquipe": 3.1
  },
  {
    "time": "Washington Wizards",
    "temporada": "20",
    "conferencia": "East",
    "desempenho": {
      "jogos": 5,
      "vitorias": 3,
      "derrotas": 2,
      "aproveitamento": 0.6,
      "colocacaoConferencia": 2,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "-Ipod,Russo.",
        "posicao": "PF",
        "overall": 88,
        "overallBase": 86,
        "ajusteTemporada": 2
      },
      {
        "nome": "lFanatic.9",
        "posicao": "SG",
        "overall": 88,
        "overallBase": 88,
        "ajusteTemporada": 0
      },
      {
        "nome": "lDeco10",
        "posicao": "C",
        "overall": 90,
        "overallBase": 90,
        "ajusteTemporada": 0
      },
      {
        "nome": "!LM",
        "posicao": "SG",
        "overall": 87,
        "overallBase": 87,
        "ajusteTemporada": 0
      },
      {
        "nome": "tico012",
        "posicao": "SF",
        "overall": 86,
        "overallBase": 86,
        "ajusteTemporada": 0
      }
    ],
    "ajusteEquipe": 1.1
  },
  {
    "time": "Los Angeles Clippers",
    "temporada": "20",
    "conferencia": "West",
    "desempenho": {
      "jogos": 5,
      "vitorias": 4,
      "derrotas": 1,
      "aproveitamento": 0.8,
      "colocacaoConferencia": 1,
      "faseAlcancada": "Temporada Regular"
    },
    "elenco": [
      {
        "nome": "FlavioJuliano",
        "posicao": "PG",
        "overall": 95,
        "overallBase": 92,
        "ajusteTemporada": 3
      },
      {
        "nome": "-NatsuDragnnel",
        "posicao": "C",
        "overall": 93,
        "overallBase": 90,
        "ajusteTemporada": 3
      },
      {
        "nome": "-Sartori",
        "posicao": "SG",
        "overall": 91,
        "overallBase": 88,
        "ajusteTemporada": 3
      },
      {
        "nome": "Cole",
        "posicao": "C",
        "overall": 81,
        "overallBase": 79,
        "ajusteTemporada": 2
      },
      {
        "nome": "joaotomiya",
        "posicao": "C",
        "overall": 86,
        "overallBase": 84,
        "ajusteTemporada": 2
      }
    ],
    "ajusteEquipe": 3.1
  }
];


// Interface de leitura usada pelo motor e pelos testes.
window.HBADatabase = Object.freeze({
  perfis: PERFIS_HISTORICOS_HBA,
  equipes: BANCO_CONSOLIDADO_HBA
});
