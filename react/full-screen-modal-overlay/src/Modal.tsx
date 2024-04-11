import * as React from "react";

export default function Modal({
  setShowModal,
}: {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className='full-screen-modal' onClick={() => setShowModal(false)}>
      <div
        className='modal-container'
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <div className='modal-header'>
          <h1>Hello from Modal</h1>
        </div>
        <div className='modal-body'>
          <div className='modal-content'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            numquam ducimus adipisci quae? Minima aliquid vel autem tempore
            consequuntur accusantium odio quod nam eius, atque, earum laboriosam
            saepe vero dolores quaerat quidem, sit nostrum natus perferendis
            delectus. Suscipit, nulla maiores. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nulla voluptatibus, libero recusandae
            accusamus possimus, illum vero vitae repudiandae temporibus illo
            porro! Sunt odit natus ad itaque magni, temporibus quisquam maxime
            libero aut aliquam nobis minus voluptate numquam, totam eligendi
            voluptatem harum quas. Ut, suscipit temporibus! Cum commodi deserunt
            nulla ab pariatur earum aspernatur sit architecto repellat voluptas
            debitis, quos tempore consectetur deleniti. Unde assumenda dolore
            minus enim praesentium error deserunt repellendus nam exercitationem
            aut, ipsam eveniet tempora facere placeat fugit odio voluptate
            reiciendis ratione vero eligendi. Magnam quia, necessitatibus
            reiciendis eveniet vero, quaerat porro obcaecati maiores mollitia,
            harum quos architecto. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Autem numquam ducimus adipisci quae? Minima
            aliquid vel autem tempore consequuntur accusantium odio quod nam
            eius, atque, earum laboriosam saepe vero dolores quaerat quidem, sit
            nostrum natus perferendis delectus. Suscipit, nulla maiores. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Nulla
            voluptatibus, libero recusandae accusamus possimus, illum vero vitae
            repudiandae temporibus illo porro! Sunt odit natus ad itaque magni,
            temporibus quisquam maxime libero aut aliquam nobis minus voluptate
            numquam, totam eligendi voluptatem harum quas. Ut, suscipit
            temporibus! Cum commodi deserunt nulla ab pariatur earum aspernatur
            sit architecto repellat voluptas debitis, quos tempore consectetur
            deleniti. Unde assumenda dolore minus enim praesentium error
            deserunt repellendus nam exercitationem aut, ipsam eveniet tempora
            facere placeat fugit odio voluptate reiciendis ratione vero
            eligendi. Magnam quia, necessitatibus reiciendis eveniet vero,
            quaerat porro obcaecati maiores mollitia, harum quos architecto.
          </div>
        </div>
        <div className='modal-footer'>
          <button
            className='button'
            onClick={() => {
              setShowModal(false);
            }}
          >
            Close Modal
          </button>
        </div>
      </div>
    </div>
  );
}
