import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import style from './Comment.module.css'

export function Comment({ content, onDeleteComment }) {
  const handleDeleteComment = () => {
    onDeleteComment(content)
  }
  return (
    <div className={ style.comment }>
      <Avatar hasBorder={false} src="https://github.com/ota-mariana.png" />

      <div className={ style.commentBox }>
        <div className={ style.commentContent }>
          <header>
            <div className={ style.authorAndTime }>
              <strong>Mariana Ota</strong>
              <time title="09 de março às 09:31h" dateTime="2023-03-09 09:31:15">Cerca de 1h atrás</time>
            </div>

            <button onClick={ handleDeleteComment } title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{ content }</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Curtir <span>25</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
