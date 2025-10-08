# Assignment 2 

Silahkan memilih dua problem berikut untuk diselesaikan.

## Problem 1 (40 poin)
Suatu relasi $R$ di himpunan $A$ dikatakan **tak-refleksif** jika untuk setiap 
$a \in A$, kita tidak menemukan $(a, a)$ di $R$.

Diberikan relasi $R$ pada himpunan seluruh manusia.
Tentukan manakah relasi $R$ berikut yang tak-refleksif jika $(a, b)$ di relasi
tersebut memenuhi kondisi berikut? Berikan alasannya juga
<ol type="a">
<li>

$a$ lebih tinggi dari $b$
<li>

$a$ dan $b$ lahir di hari yang sama
<li>

$a$ memiliki nama pertama sama seperti nama pertama milik $b$
<li>

$a$ dan $b$ memiliki kakek-nenek yang sama

</ol>

## Problem 2 (50 poin)

Misalkan $R$ adalah relasi dari himpunan $A$ ke himpunan $B$. 
**Relasi invers** dari $B$ menuju $A$, yang dinotasikan $R^{-1}$, 
adalah himpunan pasangan terurut $(b, a)$ yang mana kita bisa temukan
$(a, b)$ di $R$. Sedangkan **relasi komplementer**, yang dinotasikan 
$\overline{R}$, adalah himpunan pasangan terurut $(a, b)$ yang mana
kita tidak bisa temukan $(a, b)$ ini di $R$.

Jika $R$ adalah relasi pada himpunan seluruh provinsi yang ada di Indonesia 
yang tersusun oleh pasangan terurut $(a, b)$ dengan provinsi $a$ berbatasan
dengan provinsi $b$ (lihat lebih lengkap batas wilayah provinsi di Indonesia
[disini](https://commons.wikimedia.org/wiki/File:Indonesia,_administrative_divisions_-_en_-_monochrome.svg)), carilah 
relasi invers dan relasi komplementer dari $R$.



## Problem 3 (30 poin)

Diberikan himpunan yang beranggotakan 0 dan 1. Tentukan dan carilah semua
kemungkinan relasi yang dapat dibentuk dari himpunan tersebut.


## Problem 4 (40 poin)

Suatu relasi dikatakan **asimetrik** jika untuk setiap $(a, b)$ di $R$, 
kita tidak menemukan $(b, a)$ di $R$.

Manakah dari relasi berikut yang asimetrik? Berikan juga alasannya.

<ol type="a">
<li>

$\{(2, 2), (2, 3), (2, 4), (3, 2), (3, 3), (3, 4)\}$
<li>

$\{(1, 1), (1, 2), (2, 1), (2, 2), (3, 3) ,(4, 4)\}$
<li>

$\{(2, 4), (4, 2)\}$
<li>

$\{(1, 2), (2, 3), (3, 4)\}$
<li>

$\{(1, 1), (2, 2), (3, 3), (4, 4)\}$
<li>

$\{(1, 3), (1, 4), (2, 3), (2, 4), (3, 1), (3, 4)\}$
</ol>


## Problem 5 (50 poin)

Diberikan definisi operator yang bekerja pada relasi $n$-ary sebagai berikut:   
Misalkan $R$ adalah relasi $n$-ary dan $C$ adalah kondisi yang mungkin 
bisa dipenuhi oleh anggota di $R$. Maka operator _selection_, atau dinotasikan 
$s_C$, adalah pemetaan relasi $n$-ary $R$ menuju relasi $n$-ary 
(yang mungkin berukuran lebih kecil, ukuran tupletnya) yang masih memenuhi 
kondisi $C$.

Diberikan tabel sebagai berikut

| `lecturer` | `department`        | `course_number` | `room` | `c_time`     |
|------------|---------------------|-----------------|--------|------------|
| Carla      | Oceanography        | 335             | A100   |  9:00 A.M. |
| Carla      | Oceanography        | 412             | A100   |  8:00 A.M. |
| Fahmi      | Digital business    | 501             | A100   |  3:00 P.M. |
| Fahmi      | Digital business    | 617             | A110   | 11:00 A.M. |
| Gina       | Physics             | 544             | B505   |  4:00 P.M. |
| Rahel      | Information systems | 518             | G521   |  2:00 P.M. |
| Rahel      | Mathematics         | 575             | G502   |  3:00 P.M. |

Apa yang akan kalian dapatkan saat kalian menerapkan operator _selection_ $s_C$, 
dengan $C$ adalah kondisi saat `room` = A100? 