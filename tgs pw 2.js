
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>soal 3</title>

    <style>
        td {
            padding: 10px;
            border: 1px solid black;
        }
    </style>
</head>

<body>

    <center>
        <table style="border: 2px solid black; width: 60%; text-align: center;">
            <thead>
                <tr style="background-color: gray;">
                    <td>Jam Masuk</td>
                    <td>Jam Keluar</td>
                    <td>Lama</td>
                    <td>Keluaran Biaya</td>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td id="masuk"></td>
                    <td id="keluar"></td>
                    <td id="lama"></td>
                    <td id="keluaran"></td>
                </tr>
            </tbody>
        </table>

    </center>
    <script>
        var masuk, keluar, biaya
        let lama, awal

        masuk = 8
        keluar = 10
        lama = keluar - masuk

        if (lama > 2) {
            awal = (lama - 2) * 1000
            biaya = awal + 3000
        } else {
            biaya = 3000
        }



        document.getElementById("masuk").innerHTML = masuk
        document.getElementById("keluar").innerHTML = keluar
        document.getElementById("lama").innerHTML = lama
        document.getElementById("keluaran").innerHTML = biaya
    </script>
</body>

</html>