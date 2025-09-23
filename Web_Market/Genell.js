function formatDate(date) {
    var gun = "", ay = "", yil = "";
    yil = date.slice(0, 4);
    ay = date.slice(5, 7);
    gun = date.slice(8, 10);

    if (gun[0] == "0") { gun = gun.slice(1, 2);}

    if (gun == "") {
        return "";
    }

    return gun + "." + ay + "." + yil;
}

function kayitara(tbl, id, sutun, aranan) {
    var tablo = undefined;
    var v = "";
    try {
        tablo = document.getElementById(tbl);
        if ((aranan == "" || aranan == undefined) && id != "") {
            aranan = document.getElementById(id).value;
        }

        if (aranan == "") {
            for (var x = 0; x < tablo.rows.length; x++) {
                tablo.rows[x].style.display = "";
            }
        }
        else {
            for (var x = 0; x < tablo.rows.length; x++) {
                if (tablo.rows[x].cells[sutun].innerHTML.toString().includes("<select") == true) {
                    if (tablo.rows[x].cells[sutun].innerHTML.slice(12, tablo.rows[x].cells[sutun].innerHTML.indexOf('"') + 13) != "") {
                        v = tablo.rows[x].cells[sutun].innerHTML.slice(12, tablo.rows[x].cells[sutun].innerHTML.indexOf('"') + 13);
                        if (document.getElementById(v) != undefined) {
                            if (document.getElementById(v).options[document.getElementById(v).selectedIndex].text == aranan) {
                                tablo.rows[x].style.display = "";
                            }
                            else {
                                tablo.rows[x].style.display = "none";
                            }
                        }
                    }
                }
                else if (tablo.rows[x].cells[sutun].innerHTML.toString().includes(aranan) == true) {
                    tablo.rows[x].style.display = "";
                }
                else {
                    tablo.rows[x].style.display = "none";
                }
            }
        }
    }
    catch
    {
    }
}

function indir(table_id) {
    var rows = document.querySelectorAll('table#' + table_id + ' tr');
    // Construct csv
    var csv = [];
    for (var i = 0; i < rows.length; i++) {
        var row = [], cols = rows[i].querySelectorAll('td, th');
        for (var j = 0; j < cols.length; j++) {
            // Clean innertext to remove multiple spaces and jumpline (break csv)
            var data = cols[j].innerText.replace(/(\r\n|\n|\r)/gm, '').replace(/(\s\s)/gm, ' ')
            // Escape double-quote with double-double-quote (see https://stackoverflow.com/questions/17808511/properly-escape-a-double-quote-in-csv)
            data = data.replace(/"/g, '""');
            // Push escaped string
            row.push('"' + data + '"');
        }
        csv.push(row.join(';'));
    }
    var csv_string = csv.join('\n');
    // Download it
    var filename = 'export_' + table_id + '_' + new Date().toLocaleDateString() + '.csv';
    var link = document.createElement('a');
    link.style.display = 'none';
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv_string));
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

var surukle = false;
function gez(id) {
    document.getElementById(id).style.position = "absolute";
    document.getElementById(id).style.left = (event.pageX - 150) + "px";
    document.getElementById(id).style.top = (event.pageY - 30) + "px";
}