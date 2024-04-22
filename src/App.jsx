import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import dataTodo from './data/list';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(dataTodo);
  }, []);

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
        // Swal.fire({
        //   title: 'Data dihapus!',
        //   text: 'Data sudah dihapus...',
        //   icon: 'success',
        // });
        const newData = [...data];

        newData.splice(index, 1);

        setData(newData);
      }
    });
  };

  return (
    <>
      <div className="max-w-6xls min-h-screen bg-white">
        <div className="w-[40rem] mx-auto grid gap-3">
          <div className="w-full flex items-center justify-center p-5 mt-10">
            <h1 className="text-4xl font-bold text-gray-500">TODO LIST</h1>
          </div>
          <div className="w-full flex justify-between">
            <button
              type="button"
              className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2"
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
                      className=" w-7 h-7 bg-gray-100 border-gray-300 hover:bg-gray-400 ring-0 border rounded-lg checked:bg-purple-600 checked:hover:bg-purple-700 checked:focus:bg-purple-600 focus:ring-purple-600"
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
                    <div className="w-9 h-9 bg-white hover:bg-gray-100 rounded-md p-2 justify-center cursor-pointer">
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
      </div>
    </>
  );
}

export default App;
