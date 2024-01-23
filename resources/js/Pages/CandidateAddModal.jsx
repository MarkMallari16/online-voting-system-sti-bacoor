import React,{useState} from "react";
import { FaPlus } from "react-icons/fa";
import { Head, Link, useForm, usePage } from "@inertiajs/react";

export default function CandidateAddModal() {
    const [showModal, setShowModal] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        description: '',
        platform: ''
    })

    const submit = (e) => {
        e.preventDefault()
        post(route('candidate.store'))
        setShowModal(false)
    }
    return (
        <>
           <div className="mx-3 my-3 text-white flex justify-end ">
                <button
                    className="bg-blue-500 p-2 rounded-sm text-sm flex items-center gap-1 font-bold"
                    onClick={() => setShowModal(true)}
                >
                    <FaPlus /> Add Candidate
                </button>
            </div>
            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none w-100">
                        <div className="relative w-100 my-6 mx-auto max-w-3xl">
                            <form onSubmit={submit}>
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                                <div className="flex items-start justify-between p-3 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="font-semibold">Add Candidate</h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6">
                                <label
                    for="name"
                    class="mt-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Name:
                </label>
                <input
                    type="text"
                    id="name"
                    value={data.name}
                    onChange={e => setData('name', e.target.value)}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="name"

                />

                <label
                    for="partylist"
                    class="mt-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Partylist:
                </label>
                <input
                    type="text"
                    id="partylist"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="partylist"

                    required
                />

                <label
                    for="details"
                    class="mt-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Details:
                </label>
                <textarea
                    id="details"
                    value={data.description}
                    onChange={e => setData('description', e.target.value)}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="details"


                ></textarea>

                <label
                    for="platform"
                    class="mt-2  block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Platform:
                </label>
                <textarea
                    id="platform"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="platform"
                    value={data.platform}
                    onChange={e => setData('platform', e.target.value)}
                ></textarea>

                <label
                    for="profile_pic"
                    class="mt-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Profile Picture:
                </label>
                <input
                    type="file"
                    id="profile_pic"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="profile_pic"

                />
                                </div>

                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-blue-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 "
                                        type="submit"

                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}
