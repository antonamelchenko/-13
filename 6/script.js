let departments = [
	{ id: 2, name: "Организация", parent_id: null },
	{ id: 3, name: "Бухгалтерия", parent_id: 2 },
	{ id: 6, name: "Отдел охраны", parent_id: 2 },
	{ id: 7, name: "Караульная служба", parent_id: 6 },
	{ id: 8, name: "Бюро пропусков", parent_id: 6 },
	{ id: 12, name: "Патентный отдел", parent_id: 2 },
	{ id: 13, name: "Лётная служба", parent_id: 2 },
	{ id: 14, name: "Лётный отряд Боинг 737", parent_id: 13 },
	{ id: 17, name: "Лётный отряд Боинг 747", parent_id: 13 },
	{ id: 18, name: "1-ая авиационная эксадрилия Боинг 737", parent_id: 14 },
	{ id: 19, name: "2-ая авиационная эскадрилия Боинг 737", parent_id: 14 },
	{ id: 21, name: "Лётно-методический отдел", parent_id: 13 }
];
let list = "<ul>"; // Переменная для вывода

//Нахождение главного элемента
for (let i = 0; i < departments.length; i++) {
	if (departments[i].parent_id == null) {
		sortDepartments(departments[i]);
	}
}

function sortDepartments(department) {
	let child = false; // Переменная для открывания ul для детей
	list += `<li>${department.name}</li>`; // Добавление названия
	// Нахождение потомков
	for (let i = 0; i < departments.length; i++) {
		if (departments[i].parent_id == department.id) {
			if (!child) list += `<ul>`; // Создание списка с детьми
			child = true;
			sortDepartments(departments[i]);
		}

	}
	if (child) list += `</ul>`; // Закрытие списка с детьми
}
list += "</ul>";

document.write(list);