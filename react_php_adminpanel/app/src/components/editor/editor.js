import axios from "axios"
import React, { Component } from "react"

export default class Editor extends Component {
  constructor() {
    super()

    this.state = {
      pageList: [],
      newPageName: "",
    }
    this.createNewPage = this.createNewPage.bind(this)
  }

  componentDidMount() {
    this.loadPageList()
  }

  // Метод который будет загружать список страниц
  loadPageList() {
    axios.get("./api").then((res) => this.setState({ pageList: res.data }))
  }

  createNewPage() {
    axios
      .post("./api/createNewPage.php", { name: this.state.newPageName })
      .then(this.loadPageList())
      .catch(() => alert("Страница уже существует!"))
  }

  //Используем метод render для того чтобы наш userinterface появился на странице
  render() {
    //! Такой синтаксис значит что я из объекта this.state  вытащил в виде отдельной переменной pageList
    // Так как после срабатывания setState у меня  внутри pageList будет массив с какими то данными то я спокойно могу применит на нем метоd map для того чтобы перебрать каждый отдельный элемент и что то с ним сделать
    // ! Метод map в отличии от forEach  изменяет каждый отдельный элемент внутри массива
    const { pageList } = this.state
    const pages = pageList.map((page, i) => {
      return <h1 key={i}>{page}</h1>
    })
    return (
      <>
        <input
          onChange={(e) => {
            this.setState({ newPageName: e.target.value })
          }}
          type="text"
        />
        <button onClick={this.createNewPage}>Создать страницу</button>
        {pages}
      </>
    )
  }
}
