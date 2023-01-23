# 01 - Two Number Sum

### Soru :

Bu fonksiyon, farklı tam sayılardan oluşan boş olmayan bir dizi ve hedef toplamı (targetSum) temsil eden bir tam sayı alır. Girdi dizisindeki iki sayının hedef toplamına eşit olduğu durumda fonksiyon bunları herhangi sırada bir dizide döndürmelidir. Eğer iki sayı hedef toplamına eşit değilse, fonksiyon boş bir dizi döndürmelidir.

Not : TargetSum (ulaşılması gereken toplam) iki farklı tam sayının toplanmasıyla elde edilmelidir; hedef toplamı sadece tek bir sayı ile elde edilemez.

Array = `[3,5,-4,8,11,1,-1,6]`

TargetSum = `10`

TargetSum `[11, -1]` ile elde edilebilir.

Hedef toplama ulaşabilmek için dizi nasıl gezebileceğimiz ve çözümü nasıl bulacağız ?

- Double For loops
- Hash Table
- Sort + double for loops

### İki defa For Döngüsünü Kullanılması

**İki kez for döngüsü** kullanılır ve dizi elemanları iki kez gezerek hedef toplama ulaşılabilir. Fakat bu çözüm zaman açısında (time point of view) optimal bir çözüm değil. Bu durumda

Time Complexity (O^2) olur, çünkü her bir elaman için dizinin geri kalanı dolaşmak gerekiyor.

Space Compexity O(1) olacaktır, çünkü 2 değişken kullanılmaktadır.

```jsx
function twoNumberSum(array, targetSum) {
  // ilk for loop döngüsü
  for (let i = 0; i < array.length - 1; i++) {
    let firstNum = array[i];
    // ikinci for loop döngüsü
    for (let j = i + 1; j < array.length; j++) {
      let secondNum = array[j];
      if (firstNum + secondNum === targetSum) {
        return [firstNum, secondNum];
      }
    }
  }
  return [];
}
```

### Hash Table Kullanılması

Diğer çözüm ise **hash table** kullanmak fakat bu da ekstra olarak bellek harcamamıza neden olacaktır ama algoritmamız daha hızlı hale getirebilir. Özellikle, diziyi gezebiliriz ve gördüğümüz her sayıyı bir hash table'da saklayabiliriz. Bu, daha sonra hash table aracılığıyla bu sayıları sabit zamanda erişmemizi sağlar.

Time Complexity O(n)

Neden ?

— Diziyi sadece bir kez geziyoruz. Her sayı için yaptığımız tek şey **`counterpart`**hesaplamaktır. Y’yi çözmek ise sadece sabit zaman işlemidir, yalnızca bir hesaplama yapıyoruz, `targetSum` var ve şu anda bulunduğumuz sayı olan `currentNum` var. Sonrasında ise sadece bir hash table ‘da değerlere erişiyoruz, bu sabit zamanda çalışacaktır. Bu nedenle Time Complexity O(n) ‘dir.

Space Complexity O(n)

Neden ?

— Değerlerimizi hash table’da saklıyoruz.

```jsx
function twoNumberSum(array, targetSum) {
  // create hash table
  let nums = {};

  for (let i = 0; i < array.length; i++) {
    let currentNum = array[i];
    let counterpart = targetSum - currentNum;

    if (counterpart in nums) {
      return [currentNum, counterpart];
    } else {
      nums[currentNum] = true;
    }
  }
  return [];
}
```

### Sort Kullanılması

Hash table kullanmadan sort ile daha optimal bir şekilde çözülebilir.

Verilen diziyi öncelikle küçükten büyüğe sıralar ve sonra biri dizinin sonunda diğeri ise dizinin başında olmak üzere iki pointer kullanılır. Pointerlar arasındaki toplam ile hedef toplam karşılaştırılır. Eğer toplam hedef toplama eşit ise, iki pointer’ın gösterdiği sayıları döndürür.

Eğer toplam hedef toplamdan küçük ise, sol pointer'ı sağa doğru (bir sonraki elemana) hareket ettirilir

Eğer toplam hedef toplamdan büyük ise sağ pointer'ı sola doğru hareket ettirir.

Eğer dizide hedef toplama eşit olan iki sayı bulunamazsa, kod sonunda boş bir dizi döndürür.

Time Complexity O(n log n) olur. Çünkü sıralama algoritması O(n log n) iken, pointerlar arasındaki döngü O(n) olacaktır.

Space Complexity ise O(1) olacaktır, çünkü sadece 2 pointer kullanılıyor.

```jsx
function twoNumberSum ( array, targetSum ) {
	array.sort((a,b) => a - b) // array'i küçükten büyüğe sıralama

	// left pointer
	let left = 0;

	// right pointer
	left right = array.length - 1;

	while ( left < right ) {
		let currentSum = array[left] + array[right];
		if(currentSum === targetSum) {
			return [array[left], array[right]];
		} else if (currentSum < targetSum) {
			left++;
		} else {
			right--;
		};
	}
}
	return [ ];
};



```
