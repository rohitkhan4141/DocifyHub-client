
function Faq() {
  return (
    <>
      <h2 className='text-4xl text-center font-bold mb-16'>
        FAQ
      </h2>
      <div className="w-4/5 mx-auto mb-20">
        <div className="collapse collapse-arrow bg-base-200 mb-5">
          <input type="radio" name="my-accordion-2" checked="checked" />
          <div className="collapse-title text-xl font-medium">
            What devices are compatible with this platform?
          </div>
          <div className="collapse-content">
            <p>Our platform is accessible across various devices and operating systems, including desktops, laptops, tablets, and smartphones. Whether you prefer Windows, macOS, Android, or iOS, you can seamlessly access and collaborate on your documents.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 mb-5">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            How secure is the data stored on this platform?
          </div>
          <div className="collapse-content">
            <p> Security is our top priority. We employ robust encryption methods to safeguard your data. Additionally, our platform adheres to industry-standard security protocols, ensuring that your documents and conversations remain confidential and protected.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 mb-5">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Can I control who has access to my documents?
          </div>
          <div className="collapse-content">
            <p>Absolutely. You have full control over document access. You can assign specific permissions to collaborators, granting them view-only, editing, or commenting rights. Moreover, you can manage sharing settings and revoke access at any time, giving you complete control over your documents accessibility.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Faq