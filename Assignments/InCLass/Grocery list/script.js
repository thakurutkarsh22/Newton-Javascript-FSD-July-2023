let click = 0;

function calcTotal() {
  const tableElement = document.querySelector("tbody");

  if (click > 0) {
    const elem = document.querySelector("body > table > tbody > tr:last-child");
    elem.remove();
  }

  const pricesElement = document.querySelectorAll("[data-ns-test='price']");
  let totalPrice = 0;
  for (let index = 0; index < pricesElement.length; index++) {
    const tdElement = pricesElement[index];
    console.dir(tdElement);
    const value = tdElement.textContent;
    totalPrice += Number(value);
  }

  console.log(totalPrice, "totalPrice");

  //   create a table row to insert in the last

  const lastRow = document.createElement("tr"); // <tr> </tr>

  const tableDataGrandTotal = document.createElement("td");
  tableDataGrandTotal.textContent = "Grand Total";

  const tableDataGrandTotalInt = document.createElement("td");
  tableDataGrandTotalInt.textContent = totalPrice;
  tableDataGrandTotalInt.setAttribute("data-ns-test", "grandTotal");

  //   these 2 things are NOT DOM manupulation bec we are tinkring with TR (which is not part of DOM itself).
  lastRow.append(tableDataGrandTotal);
  lastRow.append(tableDataGrandTotalInt);

  /*
        <tr>
            <td> Grand Total </td>
            <td data-ns-test> 303 </td>
        </tr>

  */

  tableElement.append(lastRow); // this is DOM manupulation bec tableElemet is PART OF DOM.
  click++;
}
