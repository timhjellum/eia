class SiteMap {
    constructor() {
        //function tableCreate() {
        console.log("sitemap");
        function readTextFile(file, callback) {
            var rawFile = new XMLHttpRequest();
            rawFile.overrideMimeType("application/json");
            rawFile.open("GET", file, true);
            rawFile.onreadystatechange = function () {
                if (rawFile.readyState === 4 && rawFile.status == "200") {
                    callback(rawFile.responseText);
                }
            }
            rawFile.send(null);
        }
        readTextFile("./backstop.json", function (text) {
            var data = JSON.parse(text);
            var myArray = data.scenarios;

            var body = document.getElementsByClassName('basic-table')[0];
            var table = document.createElement('table');
            table.classList.add('basic-table');
            table.classList.add('full-width');
            var thead = document.createElement('thead');
            var tbody = document.createElement('tbody');
            //var tfoot = document.createElement('tfoot');
            table.appendChild(thead);
            table.appendChild(tbody);
            //table.appendChild(tfoot);
            //th = thead.insertRow();
            //th.insertCell();
            //th.insertCell();
            //th.insertCell();
            myArray.forEach(function (element, item) {
                for (var i = 0; i < myArray.length; i++) {
                    row = table.insertRow(0);
                    var a = i;
                    var b = a;
                    var c = a;
                    //console.log(a, b, c);
                    row.insertCell().textContent = myArray[a].label;
                    row.insertCell().innerHTML = '<a href="' + myArray[b].url + '" target="_blank" title="' + myArray[b].url + '">Development</a>';
                    row.insertCell().innerHTML = '<a href="' + myArray[c].referenceUrl + '" target="_blank" title="' + myArray[c].referenceUrl + '">Production</a>';
                }
            });
            tbody.appendChild(row);
            body.appendChild(table);
            var tableHeader = document.getElementsByTagName('thead')[0];
            tableHeader.innerHTML = '<tr><th>Page</th><th>Development</th><th>Production</th></tr>';
        });

        //}
        //tableCreate();
    }
}
export default SiteMap;