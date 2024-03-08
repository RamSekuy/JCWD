  // console.log("Hello World");
  var sepatu = "adidas";  
  let angka = 123;
  const tas = "LV";

  //String Build in method
  let kalimat = "Saya sedang belajar";
  console.log(kalimat.toUpperCase());
  console.log(kalimat.split(" "));
  console.log(kalimat.slice(0,1));

  // Template Literal
  let line = `Halo, ${kalimat}`;
  console.log(line);

  console.log(`Lorem 
  Ipsum`)

  //Number Build in method
  let numerical = 10000;
  let newNumerical = numerical.toString();
  console.log( numerical , newNumerical);

console.log(
  numerical.toLocaleString("in-ID",{
    style: "currency",
    currency: "IDR"
  })
)

//Nuber Global Build Method
  let textNumeric = "5";
  console.log(Number(textNumeric));
  console.log(parseFloat(textNumeric));
  console.log(textNumeric);

  // Type Conversion
  console.log(String(123))
  console.log(Number("123"))
  console.log("3"*"3")
  console.log("3"+"3")
  console.log(Boolean(1))
  console.log(Boolean(""))
  console.log(Boolean(" "))

  //Date
  let now = new Date();
  console.log(now.getDate());
  console.log(now.getFullYear());
  console.log(now.getMonth()+1);

  // Date(0) + Milisecond
  let addDay = new Date(24*3600*1000);
  console.log(addDay);

  // unary
  let x = 2;
  x = -x;
  console.log(x);

  // Binary
  let y = 3;
  let j = 2;
  console.log(y*j);

  y += 5 // y = y + 5
  console.log(y);

  y++ // y +=1
  console.log(y);
  y-- // y -=1
  console.log(y);
  console.log(--y); // y-1 lalu tampilkan | Tambakhan dlu baru tampilkan
  console.log(y--); // Tampilkan y lalu y-1 | Tampilkan dlu baru tambahkan

  // comparison
  /*
    == equal
    === strict equal (same data type)
    > higher
    >= higher equal
    <= less 
    <= less equal

    != not equal
    !== strict not equal
  */

  let a = 7;
  let b = 5;
  a = a-b;
  b = b+a;
  a = b-a;
  console.log(a,b)