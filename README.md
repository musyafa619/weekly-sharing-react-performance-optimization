# React Performance Optimization Using React Memo & Additional Hook ( useMemo & useCallback)

Project ini berisi contoh/example dalam melakukan optimisasi performa react app ( React.Memo, useCallback dan useMemo )

## React Memo

React.memo sebenarnya adalah higher order component, yang digunakan ketika kamu melakukan re-render komponen yang di dalam nya terdapat child, akan tetapi child tersebut mendapatkan props yang sama ( tidak ada perubahan ), maka kamu bisa melakukan boosting performa dengan menggunakan React.memo ini di komponen child 

*s&k berlaku

## React.memo

Hanya berlaku untuk props yg value nya primitive type

Ketika value props nya bukan primitive type ( array atau object ), dapat menggunakan beberapa cara berikut ini :
Variable nya di letakan di luar component parent
Menggunakan function manual untuk compare dan menggunakan JSON.stringify
Diubah ke state

## React Hook => useCallback

useCallback merupakan hook yang berguna untuk optimisasi performa mirip seperti React.Memo, akan tetapi di gunakan untuk value berupa function

## React Hook => useMemo

useMemo merupakan hook yang berguna untuk melakukan ulang sebuah fungsi, jika ada perubahan di dependencies dari useMemo tersebut. 

ini berguna ketika ada perubahan di state parent, maka otomatis variable di parent tersebut akan di re-create dan ketika variable tersebut di gunakan child maka akan menyebabkan child ter re-render, maka untuk menghindari re-render yg tidak di perlukan tersebut karena memang tidak ada perubahan, kita menggunakan react hook useMemo
