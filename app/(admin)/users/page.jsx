import Image from "next/image";

function Users() {
  return (
    <div class="flex flex-col">
      <div class="sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full text-left text-sm font-light table-auto">
              <thead class="border-b small-bold border-light">
                <tr>
                  <th scope="col" class="px-6 py-1">
                    #
                  </th>
                  <th scope="col" class="px-6 py-1">
                    NAME
                  </th>
                  <th scope="col" class="px-6 py-1">
                    EMAIL
                  </th>
                  <th scope="col" class="px-6 py-1">
                    PRICE
                  </th>
                  <th scope="col" class="px-6 py-1">
                    DOB
                  </th>
                  <th scope="col" class="px-6 py-1">
                    EDIT
                  </th>
                  <th scope="col" class="px-6 py-1">
                    DELETE
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b transition duration-200 ease-in-out hover:bg-light border-light">
                  <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                  <td class="whitespace-nowrap px-6 py-4">Mark</td>
                  <td class="whitespace-nowrap px-6 py-4">Otto</td>
                  <td class="whitespace-nowrap px-6 py-4">@mdo</td>
                  <td class="whitespace-nowrap px-6 py-4">
                    <Image src={"./user.svg"} width={30} height={30} />
                  </td>
                  <td class="whitespace-nowrap">
                    <button className="ml-6">
                      <Image
                        src={"./edit.svg"}
                        alt="edit icon"
                        width={24}
                        height={24}
                      />
                    </button>
                  </td>
                  <td class="whitespace-nowrap">
                    <button className="ml-6">
                      <Image
                        src={"./delete.svg"}
                        alt="delete icon"
                        width={24}
                        height={24}
                      />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
