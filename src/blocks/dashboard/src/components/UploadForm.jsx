import styled from "styled-components"
import  GradeSelect from "./GradeSelect"

export default function UploadForm({children}) {

  return (
    <Form>
      <Control>
        <Label htmlFor="video">Video</Label>
        <input type="file" id="video" name="video"/>
      </Control>
      <Control>
        <Label htmlFor="grade">Grade:</Label>
        <GradeSelect />
      </Control>
      <Control>
        <Label htmlFor="course">Course:</Label>
        <TextInput type="text" id="course" name="course" />
      </Control>
      <Control>
        <Label htmlFor="subject">Subject:</Label>
        <TextInput type="text" id="subject" name="subject"/>
      </Control>
      <Control>
        <Label htmlFor="attendees">Attendees:</Label>
        <TextInput type="number" id="attendees" name="attendees" />
      </Control>
      <Control>
        <Label htmlFor="date">Date:</Label>
        <TextInput type="date" id="date" name="date" />
      </Control>
      {children}
    </Form>
  )
}

const Form = styled.form`
  font-size: 1.6rem;
`
const Control = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 15px;
`

const TextInput = styled.input`
  border: none !important;
  width: 300px;
  height: 40px !important;
  padding-left: 16px;
  padding-right: 0;
  border-radius: 7px;
  font-size: 1.5rem;
  height: 35px;
  background-color: var(--color-gray-200);
  color: var(--color-text);
  overflow: hidden;
`

const Label = styled.label`
  color: var(--color-black);
  font-size: 1.4rem;
  font-weight: var(--font-weight-bold-700);
`