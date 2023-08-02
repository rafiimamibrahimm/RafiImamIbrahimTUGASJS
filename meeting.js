const waktuBermain = [2,2,3,3,1,4,5];

const batasWaktu = 2;

let totalWaktuBermain = 0;

let kaliMelebihiBatas = 0;
for (let i = 0; i < waktuBermain.length; i++) {
  totalWaktuBermain += waktuBermain[i];
  if (waktuBermain[i] > batasWaktu) {
    kaliMelebihiBatas++;
  }
}

console.log("Total waktu bermain: " + totalWaktuBermain + " jam");
console.log("Jumlah kali melebihi batas waktu: " + kaliMelebihiBatas);