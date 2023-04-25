import upload from '../../pom/textbox/upload ';
import 'cypress-file-upload';


describe('Should able  to upload the file ', () => {
    const download = new upload();
    it('Should able to upload the file ', () => {
        download.url();
        download.chooseFile().attachFile('path/to/file').click()

        //should able to download the file //

    });
});