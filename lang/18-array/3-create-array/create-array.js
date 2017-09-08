var styles = ["Джаз", "Блюз"];
styles.push("Рок-н-Ролл");
styles[styles.length - 2] = "Классика";
console.log( styles.shift() );
styles.unshift("Рэп", "Рэгги");
