import { Router } from "express";
import {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
} from "../controllers/jobControllers.js";
import {
  validateJobInput,
  validateIdParam,
} from "../middleware/validationMiddleware.js";

const router = Router();
router.route("/").get(getAllJobs).post(validateJobInput, createJob);
router
  .route("/:id")
  .get(validateIdParam, getJob)
  .patch(validateJobInput, validateIdParam, updateJob)
  .delete(validateIdParam, deleteJob);

export default router;
