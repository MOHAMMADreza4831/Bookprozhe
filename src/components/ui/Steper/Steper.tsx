import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { StepIconProps } from "@mui/material/StepIcon";

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 20,
    left: "calc(+50% + 16px)",
    right: "calc(-50% + 16px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#2DAA9E",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#2DAA9E",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: "white",
    borderTopWidth: 3,
    borderRadius: 2,
  },
}));

const QontoStepIconRoot = styled("div")<{ ownerState: { active?: boolean } }>(
  ({ theme }) => ({
    color: "white",
    display: "flex",
    height: 40,
    alignItems: "center",
    "& .QontoStepIcon-completedIcon": {
      color: "#147A6F",
      zIndex: 1,
      fontSize: 20,
    },
    "& .QontoStepIcon-circle": {
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "currentColor",
    },
    variants: [
      {
        props: ({ ownerState }) => ownerState.active,
        style: {
          color: "#147A6F",
        },
      },
    ],
  })
);

function QontoStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

const steps = ["1", "2", "3", "4", "5s"];

export default function CustomizedSteppers() {
  return (
    <Stack className="flex  " sx={{ width: "100%" }} spacing={5}>
      <Stepper
        className="flex flex-row-reverse "
        alternativeLabel
        activeStep={3}
        connector={<QontoConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel className="" StepIconComponent={QontoStepIcon}>
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}
