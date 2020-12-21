async function getVisa() {
	console.log("Получение визы...")
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (Math.random() > 0.5) {
				return resolve("Виза получена")
			} else {
				return reject("В визе отказано")
			}
		}, 1000)
	})
};
async function getHotel() {
	console.log("Бронирование отеля...");
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (Math.random() > 0.5) {
				return resolve("Отель забронирован")
			} else {
				return reject("Нет мест")
			}
		}, 1000)
	})
}
async function getTicket() {
	console.log("Покупка билетов...");
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (Math.random() > 0.5) {
				return resolve("Билеты куплены")
			} else {
				return reject("Недостаточно средств")
			}
		}, 1000)
	});
}
(async function start() {
	try {
		let ticket = await getTicket()
		console.log(ticket)
		let hotel = await getHotel()
		console.log(hotel)
		let visa = await getVisa()
		console.log(visa)
		console.log('В путь!')
	} catch (e) {
		console.log(e)
	}
})()