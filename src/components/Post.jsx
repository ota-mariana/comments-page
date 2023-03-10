import { Avatar } from './Avatar'
import { Comment } from './Comment'
import style from './Post.module.css'

export function Post() {
  return (
    <article className={ style.post }>
      <header>
        <div className={ style.author }>
          <Avatar src="https://github.com/ota-mariana.png" />

          <div className={ style.authorInfo }>
            <strong>Mariana Ota</strong>
            <span>Web Developer Front-end</span>
          </div>  
        </div>

        <time title="09 de março às 09:31h" dateTime="2023-03-09 09:31:15">Publicado há 1h</time>
      </header>

      <div className={ style.content }>
        <p>Hellooo people!</p>
        <p>Acabei de finalizar mais um projeto do Ignite.</p>
        <p>Vou deixar o link do repositório <a href="">aqui</a> para vocês conferirem!</p>
        <p>
          <a href="">#ignite</a>{' '}
          <a href="">#rocketseat</a>{' '}
          <a href="">#dev</a>
        </p>
      </div>

      <form className={ style.commentForm }>
        <strong>Deixe seu comentário</strong>

        <textarea placeholder="Digite um comentário aqui..." />

        <button type="submit">Comentar</button>
      </form>

      <div className={ style.commentList }>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}