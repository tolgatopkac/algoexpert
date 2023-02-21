# Sorted Squared Array

### Soru

Küçükten büyüğe doğru sıralanmış boş olmayan bir tamsayı dizisi alan ve bunu yine küçükten büyüğe sıralanmış sıralanmış bir şekilde array'deki elemanların karelerini alarak yeni bir array döndüren fonksiyon yazın.

Örneğin
Input : `[1, 2, 3, 5, 6, 8, 9]`

Output : `[1, 4, 9, 25, 36, 64, 81]`

### Çözüm nasıl açıklanabilir ?

Öncelikle soruyu anlamakla başlarsak, bize bir input (girdi) olarak bir array verilecek ve bu array tamsayılar içerecek. Bu tam sayılar küçükten büyüğe doğru sıralanacak yani input bize sıralı bir şekilde verilecek.

Cevap olarak istenen girdi dizisindeki tüm tamsayıların karelerini yine küçükten büyüğe sıralanmış bir şekilde yeni bir array döndürmek.

Burda dikkat edilmesi gereken noktalardan biri input olarak verilen array'de yer alacak olan negatif elemanlar

Soruda verilen örnekte input ve output elamanların uzunlukları birbiriyle eşleşse bile negatif sayıların yer aldığı durumda bu durum söz konusu olmayabilir.

#### Pozitif sayıların yer aldığı durum

- Input : [1, 2, 3, 5, 6, 8, 9] Output : [1, 4, 9, 25, 36, 64, 81]

#### Negatif sayıların yer aldığı durum

- Input : [-4, 1, 2] Output : [16, 1, 4] olması gereken Output : [1, 4, 16]

### Çözüm - 1

İlk olarak 'brute force' olarak bilinen çözüm yöntemi, zaman karmaşıklığı (time complexity) açısından uygun olmayabilir ancak uygulaması en basit olandır.

- Bu yaklaşımda input array'inde yer alan tüm değerlerin karelerini oluştururuz, bunları bir output array'ine yerleştirirz. Output arrray'inde yer alan sıralamayla ilgilenmeyiz ve daha sonra sadece çıktı array'ini sıralarız.
  Örneğin :
  Input : `[-2, -1, 1, 3]` --> `[4, 1 ,1 9].sort()` --> OUTPUT : `[1,1,4,9]`

Sonuç olarak bu çözümde input dizisindeki tüm değerlerin karelerini oluşturur, sonra bunları sıralar ve sonra diziyi döndürürüz.

Bu yaklaşımda

- Time Complexity O(nlogn)

Bunun nedeni çıktı dizisini sıralamamız gerektiğindendir.

- O(n) space

Space complexity O(n) olmasının nedeni yeni bir veri yapısı oluşturuyoruz ve bu array input array'inde yer alan n tane elemanla aynı sayıda elemana sahip olacaktır. Bu nedenle n büyüklüğünde bir space complexity sahip oluyoruz.

n burada input array'inde alan eleman sayısını ifade eder.

### Çözüm - 2 (Optimal Time Complexity)

Input : `[-7, -5, -4, 3, 6, 8, 9]`

Bu yaklaşımda boş bir output array'i oluşturacağız `[0, 0, 0, 0, 0, 0, 0]`

Bu çözümde düşünelecek ilk durum Negatif değerlerde ve pozitif değerlerde sayı büyüdükçe, bu sayıların kareleri daha büyük hale gelir. Bu durum karşısında input array'imizde yer alan ilk ve son elemanın değerlerine bakabiliriz ve bu değerleri karşılaştırarak hangisinin daha büyük olduğunu belirleyebiliriz.

Input dizinin başında ve sonunda oluşturalacak olan 2 pointer bu değerlerin mutlak değerlerini karşılaştıracağız ve mutlak değeri daha büyük olan karesini alıp output array'in son elemanına yerleştireceğiz. Böylelikle output array'i son elemanından itibaren oluşturmaya başlayacağız.

Bu yaklaşımda

- Time Complexity O(n) time

  Bunun nedeni n time complexity daha optimize bir yaklaşımdır. Tek yapmamız gereken, bu array'i bir kez üzerinden geçerek ve output array'i oluşturup döndürmektir.

- O(n) space

Yukarıdaki çözümde açıkladığım gibi input array'imizi değiştiremeyeceğimizden dolayı kareleri alınıp sıralanmış yeni bir array oluşturmamız gerekiyor.
