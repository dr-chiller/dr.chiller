const ContactUsMap = () => {
    return (
        <div className="w-full h-96 overflow-hidden shadow">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3604.681182369924!2d55.47164927538777!3d25.381999477592508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDIyJzU1LjIiTiA1NcKwMjgnMjcuMiJF!5e0!3m2!1sen!2sin!4v1755591237097!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>

    )
}

export default ContactUsMap;