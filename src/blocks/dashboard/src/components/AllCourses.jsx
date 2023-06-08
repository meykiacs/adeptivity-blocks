import styled from "styled-components"
import Section from "./Section"
import SectionHeader from "./SectionHeader"
import GradeSelect from "./GradeSelect"
import CourseCardList from "./CourseCardList"

import { courses2 } from "../data"

export default function AllCourses() {
  return (
    <Section>
      <SectionHeader hasRow title="All Courses">
        <form>
          <fieldset>
            <input
              type="radio"
              name="filter"
              value="in-progress"
              id="in-progress"
            />
            <Label htmlFor="in-progress">In Progress</Label>
            <input type="radio" name="filter" value="passed" id="passed" />
            <Label htmlFor="passed">Already Passed</Label>
            <input
              type="radio"
              name="filter"
              value="available"
              id="available"
            />
            <Label htmlFor="available">Available</Label>
          </fieldset>
        </form>
        <SortedBy>
          <Fieldset>
            <Label htmlFor="order">Sorted by:</Label>
            <GradeSelect
              name="order"
              id="order"
              s={[
                { value: "last-viewed", display: "Last Viewed" },
                { value: "newest", display: "Newest" },
                { value: "oldest", display: "Oldest" },
                { value: "subject", display: "Subject" },
                { value: "duration", display: "Duration" },
              ]}
              height="25px"
              width="110px"
            />
          </Fieldset>
        </SortedBy>
      </SectionHeader>
      <CourseCardWrapper>
        <CourseCardList courses={courses2} withDuration />
      </CourseCardWrapper>
    </Section>
  )
}

const Label = styled.label`
  font-size: 1.4rem;
`

const SortedBy = styled.form`
  margin-left: auto;
`

const Fieldset = styled.fieldset`
  display: flex;
  gap: 6px;
`


const CourseCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 33px;
  & > * {
    flex-basis: 180px;
  }
`
