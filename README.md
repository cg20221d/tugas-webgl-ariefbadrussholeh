# Tugas Webgl

| Nama | Arief Badrus Sholeh |
| ---- | ------------------- |
| NRP  | 5025201228          |

## Tugas Webgl#1

#### Gabungan string

- Digit terakhir NRP => 2 8
- Alfabet terakhir nama lengkap => E H

#### Screenshot

![Result](/result.png)

#### Source

- https://www.youtube.com/watch?v=y2nWmdSHlkU (Drawing multiple shapes)
- https://github.com/davidwparker/programmingtil-webgl/tree/master/0028-multiple-shapes

## Tugas Webgl#2

Melanjutkan aplikasi WebGL yang ada di repositori yang telah dibuat pada penugasan sebelumnya.

Untuk aplikasi Webgl dapat diakses melalui
[link berikut ini](https://5025201228-tugas-webgl-2.netlify.app/)

#### Tampilan akhir aplikasi

![asd](/result2.gif)

#### Penyesuaian

Terdapat beberapa penyesuaian dan penambahan yang saya lakukan yang berbeda dari penugasan sebelumnya

- Mengubah struktur proyek ke dalam bentuk _object oriented_. Karena agak kesusah untuk mengatur animasi transformasi yang berbeda setiap objek
  > Sumber : https://github.com/davidwparker/programmingtil-webgl/tree/master/0079-objects-multiple-transformations
- Tidak menggunakan _interleaved buffer data_ lagi pada _array vertices_. Dipisah menjadi `position_vertices`, `color_vertices`, dan `indices`.
- _Shader Program_ dipisah kedalam file sendiri menggunakan bantuan library `glUtils`
- `Angka 2`, `Huruf E`, dan `Huruf H` di-skalasikan menjadi 3 kali lipat supaya lebih bagus tampilannya
- Fitur tambahan yaitu _freeze_ animasi menggunakan tombol _space_ dan rotasi menggunakan tombol _wasd_ pada objek angka

#### Penjelasan

- Perbaiki definisi data verteks objek dua digit dan dua alfabet yang sebelumnya telah terbuat sedemikian sehingga menjadi objek 3D. Dengan kata lain, lengkapi data posisi masing-masing verteks tersebut dengan nilai z.

  > Untuk vertices setiap objek dipisahkan dalam masing-masing file pada folder `/libs` yang kemudian di export ke file `index.js`

- Melalui bantuan pustaka glMatrix:

  - Atur perspektif kamera dengan area pandang 75 derajat, rasio aspek persegi, titik potong dekat 0.5, titik potong jauh 50.0

  ```js
  mat4.perspective(state.pm, (5 * Math.PI) / 12, 1.0, 0.5, 50.0); // 75 derajat = (5 * Pi) / 12
  ```

  - Atur posisi z kamera 7.5 unit mundur dari origin, tapi pertahankan agar kamera tetap melihat ke arah origin

  ```js
  var state = {
    ...
    app: {
      ...
      eye: {
        x: 0.0,
        y: 0.0,
        z: 7.5, // pozizi z kamera
      },
      ...
    },
  };

    ...

  mat4.lookAt(state.vm, vec3.fromValues(state.app.eye.x, state.app.eye.y, state.app.eye.z), vec3.fromValues(0, 0, 0), vec3.fromValues(0, 1, 0));
  ```

- (Secara otomatis) Translasikan objek digit pertama secara horizontal, memantul antara sisi kanan dan kiri Canvas dengan kecepatan 0.0xxx tiap frame dimana xxx senilai tiga digit terakhir dari NRP kalian masing-masing

```js
var horizontalSpeed = 0.0228; // NRP 5025201228

if (horizontalDelta >= 1.6) horizontalSpeed *= -1; // 1.6 merupakan batas object yang diproyeksikan
if (horizontalDelta <= -1.6) horizontalSpeed *= -1;

horizontalDelta += horizontalSpeed;

mat4.translate(mm, mm, [horizontalDelta, 1.0, 0.0]);
```

- (Secara otomatis) Skalasikan objek digit kedua, memantul antara ukuran setengah dan dua kali lipat dengan kecepatan skalasi bebas (kalian tentukan sendiri).

```js
if (scaleDelta >= 2.0) scaleSpeed *= -1; // Jika ukuran mencapai 2 kali lipat
if (scaleDelta < 0.5) scaleSpeed *= -1;

scaleDelta += scaleSpeed;

mat4.scale(mm, mm, [scaleDelta, scaleDelta, scaleDelta]);
```

- (Secara interaktif) Rotasikan objek alfabet pertama terhadap sumbu Y dengan kecepatan sudut bebas (kalian tentukan sendiri) ketika tombol kiri atau kanan pada keyboard ditekan.

```js
var yTheta = 0.0;

if (state.ui.pressedKeys[37]) {
  // left
  yTheta -= 0.05;
} else if (state.ui.pressedKeys[39]) {
  // right
  yTheta += 0.05;
}

mat4.rotateY(mm, mm, yTheta);
```

- (Secara interaktif) Rotasikan objek alfabet kedua terhadap sumbu X dengan kecepatan sudut bebas (kalian tentukan sendiri) ketika tombol atas atau bawah pada keyboard ditekan.

```js
var xTheta = 0.0;

if (state.ui.pressedKeys[40]) {
  // down
  xTheta += 0.05;
} else if (state.ui.pressedKeys[38]) {
  // up
  xTheta -= 0.05;
}

mat4.rotateX(mm, mm, xTheta);
```
