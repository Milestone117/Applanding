import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { FaEnvelope, FaPhone, FaComment, FaTimes } from 'react-icons/fa'

const ContactModal = ({ isOpen, closeModal, packageDetails }) => {
  const handleEmail = () => {
    const subject = `Milestone Technologies - ${packageDetails.title} Package Inquiry`;
    const body = `Hi MilesTech117,\n\nI'm interested in the ${packageDetails.title} package priced at $${packageDetails.price}. Please provide more information.\n\nBest regards`;
    window.location.href = `mailto:iddyrajabu117@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    closeModal();
  };

  const handleCall = () => {
    window.location.href = 'tel:+255769623698';
    closeModal();
  };

  const handleSMS = () => {
    const message = `Hi, I'm interested in the ${packageDetails.title} package ($${packageDetails.price})`;
    window.location.href = `sms:+255769623698?body=${encodeURIComponent(message)}`;
    closeModal();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex justify-between items-center mb-6">
                  <Dialog.Title as="h3" className="text-2xl font-bold text-gray-900">
                    Contact Milestone Technologies
                  </Dialog.Title>
                  <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <FaTimes size={24} />
                  </button>
                </div>

                <div className="space-y-4">
                  <p className="text-gray-600 mb-6">
                    Selected Package: <span className="font-semibold text-primary">{packageDetails.title}</span>
                    <br />
                    Price: <span className="font-semibold text-primary">${packageDetails.price}</span>
                  </p>

                  <button
                    onClick={handleEmail}
                    className="w-full flex items-center justify-center gap-3 p-4 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                  >
                    <FaEnvelope size={20} />
                    <span>Send Email</span>
                  </button>

                  <button
                    onClick={handleCall}
                    className="w-full flex items-center justify-center gap-3 p-4 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors"
                  >
                    <FaPhone size={20} />
                    <span>Call Now</span>
                  </button>

                  <button
                    onClick={handleSMS}
                    className="w-full flex items-center justify-center gap-3 p-4 rounded-lg bg-purple-500 text-white hover:bg-purple-600 transition-colors"
                  >
                    <FaComment size={20} />
                    <span>Send SMS</span>
                  </button>
                </div>

                <div className="mt-6 text-center text-sm text-gray-500">
                  Choose your preferred method of contact
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ContactModal; 