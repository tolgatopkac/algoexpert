# 02 - Validate Subsequence

### Soru :

İki boş olmayan tamsayı dizisi verildiğinde, ikinci dizinin birincisinin bir alt dizisi olup olmadığını belirleyen bir işlev yazın.

Bir dizinin bir alt dizisi, dizide ardışık olmak zorunda olmayan ancak dizi içinde göründükleri sırayla aynı olan bir dizi sayısıdır.

Örneğin `[1,3,4]` ve ya `[2,4]` dizileri `[1,2,3,4]` dizisinin alt dizisidir.

Not : Dizinin kendisi ve tek elemanlı bir dizi de alt dizi olarak sayılmaktadır.

Fonksiyonumuzu çağırdığımızda bize boolean bir değer döndürmelidir. (False / True)

## Çözüm nasıl açıklanabilir ?

Fark edilmesi gereken ilk durum verilen her iki diziyi de gezmemiz gerektiğidir. Orijinal dizide alt dizinin yer alıp almadığını arayacağız. Bu yüzden
ikinci diziyi tamamen gezmemiz gerekiyor, çünkü ilk dizide hangi tamsayıları aradığımızı bilmemiz gerekiyor.
Ardından ana diziyi de tamamen gezmemiz gerekiyor, çünkü alt dizimiz aslında ana dizinin herhangi bir yerinde olabilir.

Bu durumda algoritma mantığımızın bu iki diziyi de gezme işlemini içermesi gerekiyor.

Bu durumda asıl sorumuz her iki dizide nasıl gezineceğiz ve ana dizide bu sayıları bu sırayla nasıl elde edeceğiz ?

Bir alt dizideki öğelerin sırasının ve orijinal dizideki sıralarının önemli olması nedeniyle potansiyel alt diziyi aramaya başladığımızda sıranın önemli olması sebebiyle alt dizinin ilk elemanını orijinal dizide arıyoruz.

Yapılması gereken ilk şey potansiyel alt dizimizin ilk öğesininde bir pointer tanımlamak ve pointer'in gösterdiği ilk öğeyi bulana kadar ana dizimizi gezmek. Ana dizimizde ilk öğeye başka bir pointer yerleştireceğiz.

Bir for döngüsü veya while döngüsü kullanabiliriz. Önemli olan nokta elemanlara bakarak bu diziyi döngü ile dolaşmamız ve alt dizimizdeki elemanın ana dizimizde olup olmadığını görmemizdir.

**Time Complexity O(n)**

- n burda ana array'imizin uzunluğu olacaktır.
- n zamanın O olmasının nedeni, ana diziyi tamamen dolaşmamız gerektiği için O(N). Durmadan döngü ile dolaşıyoruz ve yalnızca alt dizinin elemanlarıyla eşleşme olup olmadığını kontrol ediyoruz.

**Space Complexity O(1)**

- O(1) olmasının sebebi birkaç pointer dışında belleğimizde bir şey depolamıyoruz.
