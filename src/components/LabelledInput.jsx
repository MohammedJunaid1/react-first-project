export function LabelledInput({label,placeholder,type}){
    return <>
       <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="username"
                  >
                    {label}
                  </label>
                  <input type={type}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                   
                    placeholder={placeholder}
                  />
    </>
    }