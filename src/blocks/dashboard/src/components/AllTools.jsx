import styled from "styled-components"
import GradeSelect from "./GradeSelect"

export default function AllTools() {
  return (
    <Wrapper>
      <h3>Tools</h3>
      <SortedBy>
        <fieldset>
          <label htmlFor="order">Sorted by:</label>
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
        </fieldset>
      </SortedBy>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  margin-top: 37px;

  & h3 {
    font-weight: var() (--font-weight-bold-600);
    font-size: 1.7rem;
    color: var(--color-black);
  }
`
const SortedBy = styled.form`
  margin-left: auto;
  & label {
    font-size: 1.4rem;
  }

  & fieldset {
    display: flex;
    gap: 6px;
  }
`
