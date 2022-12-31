import { css } from '@emotion/react';
import { OutputResults } from '../../data/types';
import { FilterMaterialUnit } from '../../data/materials';
import { colors } from '../../styles/colors';
import { borderRadius, shadow, space } from '../../styles/variables';

interface OutputProps {
  results: OutputResults;
  originalData?: FilterMaterialUnit[];
}

const outputStyles = css`
  width: 100%;
  padding: ${space.md};
  color: ${colors.grayDark};
  border-top: 0.2rem solid ${colors.greenDark};
  border-bottom-left-radius: ${borderRadius.smooth};
  border-bottom-right-radius: ${borderRadius.smooth};
  background: linear-gradient(${colors.greenDark}, ${colors.green});
  box-shadow: inset 0 0.4rem 1rem 0 rgba(0, 0, 0, 0.5);
`;

const tableStyles = css`
  width: 100%;
  border-collapse: collapse;

  tr:nth-of-type(odd) {
    background-color: ${colors.green};
  }

  tr:nth-of-type(even) {
    background-color: ${colors.greenLight};
  }

  td {
    padding: ${space.sm};
    width: min-content;
  }
`;

const Output = (props: OutputProps) => {
  const { results } = props;

  const generateOutputItems = () => {
    const nodes = [];
    for (const res in results) {
      const node = (
        <tr key={res}>
          <td>{results[res].label}</td>
          <td>{results[res].value}</td>
        </tr>
      );

      nodes.push(node);
    }

    return nodes;
  };

  console.log(results);
  return (
    <div css={outputStyles}>
      <table css={tableStyles}>
        <tbody>{generateOutputItems()}</tbody>
      </table>
    </div>
  );
};

export default Output;
