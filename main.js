document.addEventListener('DOMContentLoaded', function () {
    const calculateBtn = document.getElementById('calculateBtn');
    const quantityInput = document.getElementById('quantity');
    const productSelect = document.getElementById('product');
    const resultDiv = document.getElementById('result');

    calculateBtn.addEventListener('click', function () {
        const quantity = quantityInput.value;
        const productPrice = parseInt(productSelect.value);
        
        // Проверка корректности ввода количества товара
        const quantityRegex = /^[1-9]\d*$/;
        if (!quantityRegex.test(quantity)) {
            resultDiv.innerHTML = '<span style="color: red;">Ошибка: введите корректное количество товара.</span>';
            return;
        }

        const totalPrice = productPrice * parseInt(quantity);
        resultDiv.innerHTML = `Стоимость заказа: ${totalPrice} руб.`;
    });
});
