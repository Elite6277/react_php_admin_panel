import $ from "jquery"

function getPgaeList() {
  $("h1").remove()
  $.get(
    "./api",
    (data) => {
      data.forEach((file) => {
        $("body").append(`<h1>${file}</h1>`)
      })
    },
    "JSON"
  )
}

getPgaeList()

$("button").click(() => {
  $.post(
    "./api/createNewPage.php",
    {
      name: $("input").val(),
    },
    () => {
      getPgaeList()
    }
  ).fail(() => {
    alert("Страница уже существует")
  })
})
