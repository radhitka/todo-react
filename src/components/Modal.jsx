function Modal(props) {
  const isUpdate = props.isUpdate;
  const handleChangetitle = props.setDataTitle;
  const handleSubmit = props.setSubmit;
  const title = props.title;
  const onClose = props.onClose;

  if (!props.isOpen) {
    return null;
  }

  const modalAnimation = props.isOpen
    ? 'transition transition-transform ease-in duration-300 transform opacity-100 scale-100'
    : 'transition transition-transform ease-out duration-300 transform opacity-0 scale-95';

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 ${modalAnimation}`}
    >
      <div className="w-[36rem] bg-white p-8 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">
            {isUpdate ? 'Edit data' : 'Tambah data'}
          </h2>
          <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={onClose}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="title">Judul</label>
            <input
              type="text"
              id="title"
              className="rounded-md focus:ring-purple-500"
              value={title}
              onChange={(e) => handleChangetitle(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-4 flex justify-between">
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none"
            onClick={handleSubmit}
          >
            {isUpdate ? 'Ubah' : 'Simpan'}
          </button>

          <button
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
            onClick={onClose}
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
