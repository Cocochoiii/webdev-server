// The assignment routes are nested under a course for GET and POST
import AssignmentsDao from "./dao";
export default function AssignmentRoutes(app) {
  const dao = AssignmentsDao();
  const findAssignmentsForCourse = async (req, res) => {
    const { courseId } = req.params;
    const assignments = await dao.findAssignmentsForCourse(courseId);
    res.json(assignments);
  };
  const createAssignmentForCourse = async (req, res) => {
    const { courseId } = req.params;
    const created = await dao.createAssignment({ ...req.body, course: courseId });
    res.json(created);
  };
  const deleteAssignment = async (req, res) => {
    const status = await dao.deleteAssignment(req.params.assignmentId);
    res.send(status);
  };
  const updateAssignment = async (req, res) => {
    const status = await dao.updateAssignment(req.params.assignmentId, req.body);
    res.send(status);
  };
  app.get("/api/courses/:courseId/assignments", findAssignmentsForCourse);
  app.post("/api/courses/:courseId/assignments", createAssignmentForCourse);
  app.delete("/api/assignments/:assignmentId", deleteAssignment);
  app.put("/api/assignments/:assignmentId", updateAssignment);
}
