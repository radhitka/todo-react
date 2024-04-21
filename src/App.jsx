import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-3">
          <div className="flex items-center justify-center p-5 mt-10">
            <h1 className="text-4xl font-bold text-gray-500">TODO LIST</h1>
          </div>
          <div className="w-[32rem] mx-auto flex justify-between">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2"
            >
              Default
            </button>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2"
            >
              Default
            </button>
          </div>
          <div className="w-[32rem] mx-auto grid grid-cols-1 bg-gray-300 rounded-md p-4 gap-4">
            <div className="flex justify-between py-3 px-3 bg-gray-200 w-full rounded-lg items-center">
              <div className="flex gap-3 items-center">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 border border-gray-300 rounded-lg bg-gray-500 focus:ring-3 focus:ring-blue-300 "
                  required
                />
                <div className="grid grid-cols-1 gap-1">
                  <p>Belajar React</p>
                  <p>22-04-2023</p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-9 h-9 bg-gray-300 rounded-md p-2 justify-center">
                  <FontAwesomeIcon icon={faTrash} className="w-5 h-5" />
                </div>
                <div className="w-9 h-9 bg-gray-300 rounded-md p-2 justify-center">
                  <FontAwesomeIcon icon={faPencil} className="w-5 h-5" />
                </div>
              </div>
            </div>
            <div className="flex justify-between py-3 px-3 bg-gray-200 w-full rounded-lg items-center">
              <div className="flex gap-3 items-center">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 border border-gray-300 rounded-lg bg-gray-500 focus:ring-3 focus:ring-blue-300 "
                  required
                />
                <div className="grid grid-cols-1 gap-1">
                  <p>Belajar React</p>
                  <p>22-04-2023</p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-9 h-9 bg-gray-300 rounded-md p-2 justify-center">
                  <FontAwesomeIcon icon={faTrash} className="w-5 h-5" />
                </div>
                <div className="w-9 h-9 bg-gray-300 rounded-md p-2 justify-center">
                  <FontAwesomeIcon icon={faPencil} className="w-5 h-5" />
                </div>
              </div>
            </div>
            <div className="flex justify-between py-3 px-3 bg-gray-200 w-full rounded-lg items-center">
              <div className="flex gap-3 items-center">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 border border-gray-300 rounded-lg bg-gray-500 focus:ring-3 focus:ring-blue-300 "
                  required
                />
                <div className="grid grid-cols-1 gap-1">
                  <p>Belajar React</p>
                  <p>22-04-2023</p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-9 h-9 bg-gray-300 rounded-md p-2 justify-center">
                  <FontAwesomeIcon icon={faTrash} className="w-5 h-5" />
                </div>
                <div className="w-9 h-9 bg-gray-300 rounded-md p-2 justify-center">
                  <FontAwesomeIcon icon={faPencil} className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
