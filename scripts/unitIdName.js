// unitIdName.js

$(function () {



function initUnit(listElement, nameElement, number) {
    var showNameId = "showName-" + number;
    var showListId = "showList" + number;
    var showNameButtonHtml = "<span id=\"" + showNameId + "\" class=\"btn btn-xs btn-default\">Enter a new unit</span>";
    var showListButtonHtml = "<span id=\"" + showListId + "\" class=\"btn btn-xs btn-default\">Show unit list</span>";

    listElement.after(showNameButtonHtml);
    nameElement.after(showListButtonHtml);

    var showNameButton = $("#" + showNameId);
    var showListButton = $("#" + showListId);

    unitList(listElement, nameElement, showNameButton, showListButton);

    $(showNameButton).click(function () {
        unitName(listElement, nameElement, showNameButton, showListButton);
    });
    $(showListButton).click(function () {
        unitList(listElement, nameElement, showNameButton, showListButton);
    });
}

function unitName(list, name, listButton, nameButton) {
    $(list).hide();
    $(listButton).hide();
    $(name).show();
    $(nameButton).show();
    return "name";  // return what is showing
}

function unitList(list, name, listButton, nameButton) {
    $(list).show();
    $(listButton).show();
    $(name).hide();
    $(nameButton).hide();
    return "list";  // return what is showing
}

window.initUnit = initUnit;
window.unitName = unitName;
window.unitList = unitList;
})
