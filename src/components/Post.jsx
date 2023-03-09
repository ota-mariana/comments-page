import style from './Post.module.css'

export function Post() {
  return (
    <article className={ style.post }>
      <header>
        <div className={ style.author }>
          <img className={ style.avatar } src="https://github.com/ota-mariana.png" />

          <div className={ style.authorInfo }>
            <strong>Mariana Ota</strong>
            <span>Web Developer Front-end</span>
          </div>  
        </div>

        <time title="09 de março às 09:31h" dateTime="2023-03-09 09:31:15">Publicado há 1h</time>
      </header>

      <div className={ style.content }>
        <p>Hellooo people</p>
        <p>Acabei de finalizar mais um projeto do Ignite.</p>
        <p>Vou deixar o link do repositório <a href="">aqui</a> para vocês conferirem</p>
        <p><a href="">#ignite #rocketseat #dev</a></p>
      </div>
    </article>
  )
}