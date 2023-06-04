import {type ElementRef, useCallback, useRef, useState} from 'react';
import Webcam from 'react-webcam';
import {base64ToFile, getPassportInfo} from '@/utils/image';
import {PassportProps} from '@/type/passport';

function App() {
  const [passportInfo, setPassportInfo] = useState<PassportProps | null>(null);
  const webcamRef = useRef<ElementRef<typeof Webcam>>(null);
  const capture = useCallback(() => {
    if (webcamRef?.current?.getScreenshot) {
      const imageBase64: string | null = webcamRef?.current?.getScreenshot();
      if (imageBase64) {
        base64ToFile(imageBase64, 'passport.png')
          .then((imageFile: File) => getPassportInfo(imageFile))
          .then((passportInfo: PassportProps) => setPassportInfo(passportInfo));
      }
    }
  }, [webcamRef]);

  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center space-y-7">
      <h1>Passport Detection</h1>
      <Webcam ref={webcamRef} className="rounded" audio={false} height={480} screenshotFormat="image/png" width={480} />
      <button
        type="button"
        onClick={capture}
        className="mb-2 mr-2 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800">
        Send Passport Picture
      </button>

      <div className="relative overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                First Name
              </th>
              <th scope="col" className="px-6 py-3">
                Last Name
              </th>
              <th scope="col" className="px-6 py-3">
                Passport Number
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b bg-white text-center dark:border-gray-700 dark:bg-gray-800">
              <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                {passportInfo?.firstName || '-'}
              </th>
              <td className="px-6 py-4">{passportInfo?.lastName || '-'}</td>
              <td className="px-6 py-4">{passportInfo?.passportNumber || '-'}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
