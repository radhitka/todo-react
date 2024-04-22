import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Modal from './components/Modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [title, setTitle] = useState('');
  const [dataId, setId] = useState('');
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    const newData = JSON.parse(localStorage.getItem('todos'));

    setData(newData);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(data));
  }, [data]);

  const handleCheckboxChange = (id) => {
    const newData = data.map((item) => {
      if (item.id === id) {
        item.done = !item.done;
      }
      return item;
    });

    setData(newData);
  };

  const handleDelete = (index) => {
    Swal.fire({
      title: 'Anda Yakin',
      text: 'Data akan dihapus permanen!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya hapus',
      cancelButtonText: 'Tidak',
    }).then((result) => {
      if (result.isConfirmed) {
        const newData = [...data];

        newData.splice(index, 1);

        setData(newData);
      }
    });
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setTitle('');
    setIsUpdate(false);
    setIsOpen(false);
  };

  const handleChangetitle = (val) => {
    setTitle(val);
  };

  const handleSubmit = () => {
    if (dataId == '') {
      var newData = [
        {
          id: Math.floor(Math.random() * 100),
          title: title,
          date: moment().format('DD MMMM YYYY'),
          done: false,
        },
        ...data,
      ];
    } else {
      var newData = data.map((item) => {
        if (item.id === dataId) {
          item.title = title;
        }
        return item;
      });
    }

    setData(newData);
    setIsOpen(false);
    setTitle('');
    setId('');
  };

  const handleUpdate = (id) => {
    const checkData = data.filter((item) => item.id === id);
    if (checkData.length == 0) {
      return;
    }

    setId(id);

    const newData = checkData[0];
    setIsOpen(true);
    setTitle(newData.title);
    setIsUpdate(true);
  };

  return (
    <>
      <div className="min-h-screen justify-center items-center">
        <div className="md:w-[40rem] mx-7 md:mx-auto grid gap-3">
          <div className="w-full flex items-center justify-center p-5 mt-10">
            <h1 className="text-4xl font-bold text-gray-500">TODO LIST</h1>
          </div>
          <div className="w-full flex justify-between">
            <button
              type="button"
              className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2"
              onClick={() => openModal()}
            >
              Tambah
            </button>
          </div>
          <div className="w-full grid grid-cols-1 bg-gray-300 rounded-md p-4 gap-4">
            {data.map((e, key) => {
              return (
                <div
                  key={key}
                  className="flex justify-between py-3 px-3 bg-gray-200 w-full rounded-lg items-center"
                >
                  <div className="flex gap-3 items-center">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      checked={e.done}
                      className=" w-7 h-7 bg-white border-black hover:bg-gray-300 ring-0 border rounded-lg checked:bg-purple-600 checked:hover:bg-purple-700 checked:focus:bg-purple-600 focus:ring-purple-600"
                      onChange={() => handleCheckboxChange(e.id)}
                    />
                    <div
                      className={
                        'grid grid-cols-1 gap-1 ' +
                        (e.done ? 'line-through' : '')
                      }
                    >
                      <p>{e.title}</p>
                      <p>{e.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div
                      className="w-9 h-9 bg-white hover:bg-gray-100 rounded-md p-2 justify-center cursor-pointer"
                      onClick={() => handleDelete(key)}
                    >
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="w-5 h-5 text-red-500"
                      />
                    </div>
                    <div
                      className="w-9 h-9 bg-white hover:bg-gray-100 rounded-md p-2 justify-center cursor-pointer"
                      onClick={() => handleUpdate(e.id)}
                    >
                      <FontAwesomeIcon
                        icon={faPencil}
                        className="w-5 h-5 text-green-500"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Modal
          isUpdate={isUpdate}
          isOpen={isOpen}
          onClose={closeModal}
          title={title}
          setDataTitle={handleChangetitle}
          setSubmit={handleSubmit}
        />
      </div>
    </>
  );
}

export default App;
