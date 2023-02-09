const About = () => {
    const callExternalPage = () => {
        return {__html: '<iframe src={"https://daffy-bacon-3c6.notion.site/0c59987b2f604387a62328484bb2864b?v=58a9a33d63764677aca16b15d3f70954"} width={1000}></iframe>'};
    }
    return (
        <div dangerouslySetInnerHTML={callExternalPage()}></div>
    )
}

export default About